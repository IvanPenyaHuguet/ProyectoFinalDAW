import Reagent from './Reagent';


export default class OrganicReagent extends Reagent {

    constructor ({id, spanishName, englishName, internalReference, quantity , formula, commentary, suppliers, molecularWeight , entryDate, cas, elements, userBuyer, location, secondaryIntReference, image}) {
        super({
            id: id,
            spanishName: spanishName,
            englishName: englishName,
            internalReference: internalReference,
            quantity: quantity,
            formula: formula,
            commentary: commentary,
            suppliers: suppliers,
            molecularWeight: molecularWeight,
            entryDate: entryDate,
            cas: cas,
            elements: elements,
            userBuyer: userBuyer,
            location: location,
            reagentType: "Inorganic"
        })
        this.secondaryIntReference = secondaryIntReference;
        this.image = image;
    }
}