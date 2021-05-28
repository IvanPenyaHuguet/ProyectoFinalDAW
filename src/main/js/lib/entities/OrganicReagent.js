import Reagent from './Reagent';


export default class OrganicReagent extends Reagent {

    constructor () {
        super()
        this.secondaryIntReference;
        this.image;
    }

    getInitialValue(){
        super.getInitialValue("Organic");
        this.secondaryIntReference = '';
        this.image = null;
    }
    
    getValues () {
        return { ...super.getValues(),
            secondaryIntReference: this.secondaryIntReference,
            image: this.image
        }
    }
    addReagent(values, setSubmitting, setAlert, perTable) {   
        values.reagentType = "Organic";      
        super.addReagent(values, setSubmitting, setAlert, perTable);        
    }
    getValidationSchema(t){        
        return super.getValidationSchema(t);
    }
}