import Reagent from './Reagent';


export default class InorganicReagent extends Reagent {
    

    constructor () {
        super()
        this.utilization;
    }

    getInitialValue(){
        super.getInitialValue("Inorganic");
        this.utilization = null;
    }
    
    getValues () {
        return { ...super.getValues(),
            utilization: this.utilization
        }
    }
    addReagent(values, setSubmitting, setAlert, perTable) {   
        values.reagentType = "Inorganic";       
        super.addReagent(values, setSubmitting, setAlert, perTable);        
    }
    getValidationSchema(){
        return super.getValidationSchema();
    }
}