export function findProduct(array, code) {
    for(let i = 0; i < array.length; i++) {
        let element = array[i];
        if(element.code === code) {
            return element;
        }
    }
    return null;
}
