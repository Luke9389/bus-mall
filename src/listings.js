import { getRandomInt } from './util.js';

class Listings {
    constructor(products) {
        this.list = products.slice();
    }

    //chooses n random items from this.list
    getRandomItem() {
        const index = getRandomInt(this.list.length);
        const product = this.list[index];
        return product;
    }

    // https://stackoverflow.com/questions/49555273/how-to-shuffle-an-array-of-objects-in-javascript

    shuffleList() {
        const list = this.list;
        list.sort(() => Math.random() - 0.5);
        return list;
    }

    getNRandomItems(n) {
        let list = this.shuffleList();
        const newList = list.slice(0, n);
        return newList;
    }

    removeItemById(productID) {
        const list = this.list;
        for (let i = 0; i < list.length; i++) {
            const product = list[i];
            if (product.id === productID) {
                list.splice(i, 1);
                return
            }
        }
    }

    removeItems(array) {
        const list = this.list;
        for (let i = 0; i < array.length; i++) {
            const pulled = array [i];
            for (let k = 0; k < list.length; k++){
                const match = list[k];
                if(pulled === match){
                    list.splice(k,1);
                }
            }
        }
        return;
    }

}

export default Listings;
