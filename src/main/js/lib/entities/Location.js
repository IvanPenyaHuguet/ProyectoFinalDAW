
import i18next from 'i18next';
import * as Yup from 'yup';
import service from '../../service/backend/LocationService';
import errorService from '../../service/error/ErrorController';

export default class User {    
    
    constructor () {
        this.id;
        this.name;
        this.viewOrder;        
    }

    getInitialValue(){                    
        this.id = null;
        this.name = '';
        this.viewOrder = '';      
    }
    
    getValidationSchema(t){
        return Yup.object().shape({
            name: Yup.string()
                .min(2,t('form.add.errors.tooshort'))
                .max(50,t('form.add.errors.toolong'))
                .required(t('form.add.errors.required'))
            ,viewOrder: Yup.number(t('form.add.errors.number'))
                .required(t('form.add.errors.required'))
                .positive(t('form.add.errors.positive'))
                .integer(t('form.add.errors.integer'))  
        })
    }

    save(values, setSubmitting, setAlert) {   
        return service.save(values).then((res) => {
            if (res.status != 200 && res.status != 412) {
                setAlert ? setAlert({type: 'error', message: i18next.t('form.add.errors.unsuccesful')}) : null;
            }
            if (res.status == 412) {
                setAlert ? setAlert({type: 'error', message: i18next.t('form.add.errors.locationexist')}) : null;
            }
            if (res.status == 200) {
                setAlert ? setAlert({type: 'success', message: i18next.t('form.message.add.locationsuccess')}) : null;
            }
            setSubmitting(false);
            return res;               
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
            viewOrder: this.viewOrder
        }
    }

    delete( user , setAlert) {
        service.delete({ ...user })
        .then(res => {
            if (res.status != 200) {
                setAlert ? setAlert({type: 'error', message: i18next.t('form.modify.delete.unsuccesful')}) : null;
            } 
            else {
                setAlert ? setAlert({type: 'success', message: i18next.t('form.modify.delete.location.succesful')}) : null;
            }           
        })
        .catch(e => {
            errorService.checkError(e, setAlert);             
        }); 
    }

    getAll() {
        return service.getAll();
    }


}