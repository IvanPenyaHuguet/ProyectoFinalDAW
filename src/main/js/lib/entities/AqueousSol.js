
import i18next from 'i18next';
import * as Yup from 'yup';
import reagentService from '../../service/backend/Services/AqueousStdService';
import errorService from '../../service/error/ErrorController';
import ElementUtils from "../utils/ElementUtils";
import dayjs from 'dayjs';


export default class AqueousSol {
    
    
    constructor () {
        this.id;
        this.name;        
        this.internalReference;
        this.elements;
        this.suppliers;
        this.concentration;
        this.entryDate;
        this.location;
        this.expiryDate;
        this.molecularWeight;        
    }

    getInitialValue(){ 
        this.id = null;
        this.name = '';        
        this.internalReference = '';
        this.elements = [];
        this.suppliers = [''];
        this.concentration = 1000;
        this.entryDate = dayjs();
        this.location = '';
        this.expiryDate = dayjs();
        this.molecularWeight = 0;
    }
    
    getValidationSchema(t){
        return Yup.object().shape({
            name: Yup.string()
                .min(2,t('form.add.errors.tooshort'))
                .max(100,t('form.add.errors.toolong'))
                .required(t('form.add.errors.required'))
            ,internalReference: Yup.string().required(t('form.add.errors.required'))
            ,concentration: Yup.number(t('form.add.errors.number'))
                .required(t('form.add.errors.required'))
                .positive(t('form.add.errors.positive'))
                .integer(t('form.add.errors.integer'))                
            ,entryDate: Yup.date().default(function () {
                return dayjs();
            }).required(t('form.add.errors.required'))
            ,location: Yup.object().required(t('form.add.errors.required'))   
            ,suppliers: Yup.array().of(Yup.object().required(t('form.add.errors.required'))).required(t('form.add.errors.required')) 
            ,expiryDate: Yup.date().default(function () {
                return dayjs();
            }).required(t('form.add.errors.required'))        
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
            internalReference: this.internalReference,
            elements: this.elements,
            suppliers: this.suppliers,
            concentration: this.concentration,
            entryDate: this.entryDate,
            location: this.location,
            expiryDate: this.expiryDate,
            molecularWeight: this.molecularWeight 
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