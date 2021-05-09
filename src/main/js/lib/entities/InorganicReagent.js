import Reagent from './Reagent';


export default class InorganicReagent extends Reagent {
    

    constructor () {
        super()
        this.utilization;
    }

    getInitialValue(user){
        super.getInitialValue(user, "Inorganic");
        this.utilization = undefined;
    }

    validate(values){        
        return super.validate(values);
    }
    getValues () {
        return { ...super.getValues(),
            utilization: this.utilization
        }
    }
    addReagent(values, setSubmitting) {        
        super.addReagent(values, setSubmitting);        
    }
    getValidationSchema(){
        return super.getValidationSchema();
    }
}