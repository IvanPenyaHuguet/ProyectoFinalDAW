import i18next from 'i18next';


class DateUtil {    

    getDayMonthYear() {   
        const options = {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        } 
        return new Date().toLocaleDateString(i18next.t('zone'), options);
    }

    getDMYHM() {        
        const options = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"            
        } 
        return new Date().toLocaleDateString(i18next.t('zone'), options);
    }
}

export default new DateUtil();