

class ElementsUtils {

    perTableToServer (elements, perTable) {        
        const finalElements = [];
        for (let [key, value] of Object.entries(elements)) {                    
            for (let i=0; i < value; i++)               
                finalElements.push({...perTable[key-1]});
        }        
        return finalElements;
    }

}

export default new ElementsUtils();