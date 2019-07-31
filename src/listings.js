import { shuffle } from './util.js';

class Listings {
    constructor(products) {
        this.list = products.slice();
    }

    mix() {
    }

    dave() {
        console.log(this.list);
        this.list.splice(1, 1);
        console.log(this.list);
    }
    // //chooses n random items from this.list
    // getRandomItems(n) {
    //     const display = this.list.splice(0, (n - 1));
    //     return display;
    // }

}

export default Listings;
