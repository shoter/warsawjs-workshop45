
export function addItemToArray<T>(array : Array<T>, newItem : T) : Array<T> { return [...array, newItem];}

export function removeItemFromArray<T>(array : Array<T>, itemToDelete : T) : Array<T> {
    let newArray : Array<T> = [];
    let removed = false;
    array.forEach(val => {
        if(removed || val !== itemToDelete) {
            newArray.push(val);
        } 
        if(val === itemToDelete) {
            removed = true;
        }
    })

    return newArray;
}

export function contains<T> (array : Array<T>, item : T) : boolean {
    return array.find((val : T, _) => val === item) === item;
}