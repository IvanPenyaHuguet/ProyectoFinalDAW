
import i18next from 'i18next';
import * as Yup from 'yup';
import service from '../../service/backend/Services/UserService';
import errorService from '../../service/error/ErrorController';
import dayjs from 'dayjs';


export default class User {
    
    
    constructor () {
        this.id;
        this.name;
        this.surname;
        this.roles;
        this.username;
        this.pass;
        this.creationDate;        
    }

    getInitialValue(){                    
        this.id = null;
        this.name = '';
        this.surname = '';
        this.roles = [];
        this.username = '';
        this.pass = '';
        this.creationDate = dayjs();      
    }
    
    getValidationSchema(t){
        return Yup.object().shape({
            name: Yup.string()
                .min(2,t('form.add.errors.tooshort'))
                .max(50,t('form.add.errors.toolong'))
                .required(t('form.add.errors.required'))
            ,surname: Yup.string()
                .min(2,t('form.add.errors.tooshort'))
                .max(50,t('form.add.errors.toolong'))
                .required(t('form.add.errors.required'))
            ,username: Yup.string()
                .min(3,t('form.add.errors.tooshort'))
                .max(50,t('form.add.errors.toolong'))
                .required(t('form.add.errors.required'))  
            ,pass: Yup.string()
                .min(3,t('form.add.errors.tooshort'))
                .max(50,t('form.add.errors.toolong'))
                .required(t('form.add.errors.required'))
        })
    }

    save(values, setSubmitting, setAlert) {   
        return service.save(values).then((res) => {
            if (res.status != 200 && res.status != 412) {
                setAlert ? setAlert({type: 'error', message: i18next.t('form.add.errors.unsuccesful')}) : null;
            }
            if (res.status == 412) {
                setAlert ? setAlert({type: 'error', message: i18next.t('form.add.errors.usernameexists')}) : null;
            }
            if (res.status == 200) {
                setAlert ? setAlert({type: 'success', message: i18next.t('form.message.add.success')}) : null;
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
            surname: this.surname,
            roles: this.roles,
            username: this.username,
            pass: this.pass,
            creationDate: this.creationDate 
        }
    }

    delete( user , setAlert) {
        service.delete({ ...user })
        .then(res => {
            if (res.status != 200) {
                setAlert ? setAlert({type: 'error', message: i18next.t('form.modify.delete.unsuccesful')}) : null;
            } 
            else {
                setAlert ? setAlert({type: 'success', message: i18next.t('form.modify.delete.user.succesful')}) : null;
            }           
        })
        .catch(e => {
            errorService.checkError(e, setAlert); 
            setSubmitting(false);
        }); 
    }

    getAll() {
        return service.getAll();
    }


}