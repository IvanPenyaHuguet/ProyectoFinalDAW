
import i18next from 'i18next';
import * as Yup from 'yup';
import reagentService from '../../service/backend/AllReagentService';
import errorService from '../../service/error/ErrorController';
import ElementUtils from "../utils/ElementUtils";
import dayjs from 'dayjs';


export default class Reagent {
    
    
    constructor () {
        this.id;
        this.name;
        this.englishName;
        this.internalReference;
        this.quantity;
        this.formula;
        this.commentary;
        this.suppliers;
        this.molecularWeight;
        this.entryDate;
        this.cas;
        this.elements;
        this.userBuyer;
        this.location;
        this.reagentType;
    }

    getInitialValue( reagentType){                    
        this.name = '';
        this.englishName = '';
        this.internalReference = '';
        this.quantity = 1;
        this.formula = '';
        this.commentary = [];
        this.suppliers = [''];
        this.molecularWeight = 0;
        this.entryDate = dayjs();
        this.cas = '';
        this.elements = [];
        this.userBuyer = null;
        this.location = '';      
        this.ReagentType = reagentType;   
        this.id = null;     
    }
    
    getValidationSchema(t){
        return Yup.object().shape({
            name: Yup.string()
                .min(2,t('form.add.errors.tooshort'))
                .max(50,t('form.add.errors.toolong'))
                .required(t('form.add.errors.required'))
            ,internalReference: Yup.string().required(t('form.add.errors.required'))
            ,quantity: Yup.number(t('form.add.errors.number'))
                .required(t('form.add.errors.required'))
                .positive(t('form.add.errors.positive'))
                .integer(t('form.add.errors.integer'))                
            ,entryDate: Yup.date().default(function () {
                return dayjs();
            }).required(t('form.add.errors.required'))
            ,location: Yup.object().required(t('form.add.errors.required'))   
            ,suppliers: Yup.array().of(Yup.object().required(t('form.add.errors.required'))).required(t('form.add.errors.required'))         
        })
    }

    addReagent(values, setSubmitting, setAlert, perTable = undefined) {
        if (perTable)
            values.elements = ElementUtils.perTableToServer(values.elements, perTable);      
        values.suppliers.forEach( (val, ind) =>  {
            values.suppliers[ind] = JSON.parse(val);
        });
        values.location = JSON.parse(values.location);
        reagentService.save(values).then((res) => {
            if (res.status != 200) {
                setAlert ? setAlert({type: 'error', message: i18next.t('form.add.errors.unsuccesful')}) : null;
            }
            if (res.status == 200) {
                setAlert ? setAlert({type: 'success', message: i18next.t('form.add.succesful.reagent')}) : null;
            }
            setSubmitting(false);               
        }) 
        .catch(e => {
            errorService.checkError(e, setAlert); 
            setSubmitting(false);
        });      
    }

    getValues(){
        return {
            id: this.id,
            name: this.name,
            englishName: this.englishName,
            internalReference: this.internalReference,
            quantity: this.quantity,
            formula: this.formula,
            commentary: this.commentary,
            suppliers: this.suppliers,
            molecularWeight: this.molecularWeight,
            entryDate: this.entryDate,
            cas: this.cas,
            elements: this.elements,
            userBuyer: this.userBuyer,
            location: this.location,
            reagentType: this.reagentType
        }
    }

    deleteReagent( reagent , setAlert) {
        reagentService.delete({ ...reagent })
        .then(res => {
            if (res.status != 200) {
                setAlert ? setAlert({type: 'error', message: i18next.t('form.modify.delete.unsuccesful')}) : null;
            } 
            else {
                setAlert ? setAlert({type: 'success', message: i18next.t('form.modify.delete.succesful')}) : null;
            }           
        })
        .catch(e => {
            errorService.checkError(e, setAlert); 
            setSubmitting(false);
        }); 
    }


}