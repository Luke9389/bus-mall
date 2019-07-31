import Listings from './listings.js';
import products from './products.js';
import { shuffle } from './util.js';

let masterList = new Listings(products);

let numberArray= [1,2,3,4,5,6]
let array = [
    { stuff1: 'things1' },
    { stuff2: 'things2' },
    { stuff3: 'things3' },
    { stuff4: 'things4' },
    { stuff5: 'things5' }
]
// shuffle(array)
// console.log(array);
// shuffle(array)
// console.log(array);

console.log(array);
shuffle(array)
console.log(array);
shuffle(array)
console.log(array);
shuffle(array)