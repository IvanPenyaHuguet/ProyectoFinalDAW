
class DateUtil {    

    getDayMonthYear() {       
        return new Date().toString("dd/MM/yyyy");
    }
}

export default new DateUtil();