
export function findProduct(array, img) {
    for(let i = 0; i < array.length; i++) {
        let element = array[i];
        if(element.img === img) {
            return element;
        }
    }
    return null;
}
