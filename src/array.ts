
/**
 * Return new array with elements from `array` with `newItem` at the last position.
 * @param {array}   Input array.
 * @param {newItem} Element that we want to add to the array.
 */
export function addItemToArray<T>(array : Array<T>, newItem : T) : Array<T> { return [...array, newItem];}

/**
 * Removes first ocurrence of given item in an array. Returns new array without modifying existing one as the result.
 * @param {array}           Input array. 
 * @param {itemToDelete}    Element that will be removed.
 */
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

/**
 * Return true if given array contains given item.
 * @param {array}   Input array.
 * @param {item}    Item that we are searching for.
 */
export function contains<T> (array : Array<T>, item : T) : boolean {
    return array.find((val : T, _) => val === item) === item;
}