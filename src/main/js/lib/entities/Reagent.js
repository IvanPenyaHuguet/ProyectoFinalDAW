import DateUtils from "../utils/DateUtil";
import i18next from 'i18next';
import * as Yup from 'yup';
import reagentService from '../../service/backend/AllReagentService';
import errorService from '../../service/error/ErrorController';


export default class Reagent {
    
    
    constructor () {
        this.id;
        this.spanishName;
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

    getInitialValue(user, reagentType){                    
        this.spanishName = '';
        this.englishName = '';
        this.internalReference = '';
        this.quantity = 1;
        this.formula = '';
        this.commentary = [];
        this.suppliers = 1;
        this.molecularWeight = 0;
        this.entryDate = DateUtils.getDMYHM();
        this.cas = '';
        this.elements = [];
        this.userBuyer = user;
        this.location = 1;      
        this.ReagentType = reagentType;   
        this.id = undefined;     
    }

    validate (values) {
        console.log(values);
        const errors = {};
        if (!values.spanishName) {
            errors.spanishName = i18next.t('form.add.errors.required');
        }

        return errors;
    }
    getValidationSchema(){
        return Yup.object().shape({
            spanishName: Yup.string()
                .min(2,i18next.t('form.add.errors.tooshort'))
                .max(50,i18next.t('form.add.errors.toolong'))
                .required(i18next.t('form.add.errors.required'))
            ,internalReference: Yup.string().required(i18next.t('form.add.errors.required'))
            ,quantity: Yup.number(i18next.t('form.add.errors.number'))
                .required(i18next.t('form.add.errors.required'))
                .positive(i18next.t('form.add.errors.positive'))
                .integer(i18next.t('form.add.errors.integer'))                
            ,entryDate: Yup.date().default(function () {
                return new Date();
            }).required(i18next.t('form.add.errors.required'))
            ,location: Yup.number(i18next.t('form.add.errors.required')).required(i18next.t('form.add.errors.required'))
            ,suppliers: Yup.number(i18next.t('form.add.errors.required')).required(i18next.t('form.add.errors.required'))
        })
    }

    addReagent(values, setSubmitting, setAlert) {
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
            spanishName: this.spanishName,
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


}