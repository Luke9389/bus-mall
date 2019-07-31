import Listings from './listings.js';
import products from './products.js';
import store from './store.js';

const imageLeft = document.getElementById('image-left');
const imageCenter = document.getElementById('image-center');
const imageRight = document.getElementById('image-right');

const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');

let oldItems = [];
let newItems = [];
let turns = 0;

leftButton.addEventListener('click', () => {
    store.selectProduct(imageLeft.src);
    console.log(imageLeft.src);
    renderItems();
    turns++;
});
centerButton.addEventListener('click', () => {
    store.selectProduct(imageCenter.src);
    console.log(imageCenter.src);
    renderItems();
    turns++;
});
rightButton.addEventListener('click', () => {
    store.selectProduct(imageRight.src);
    console.log(imageRight.src);
    renderItems();
    turns++;
});

function chooseNewItems(oldItems){
    const masterList = new Listings(products);
    masterList.removeItems(oldItems);
    newItems = masterList.getNRandomItems(3);
    return newItems;
}

function displayChosenItems(chosenItems) {
    imageLeft.src = chosenItems[0].image
    imageCenter.src = chosenItems[1].image
    imageRight.src = chosenItems[2].image
}

function renderItems(){
    newItems = chooseNewItems(oldItems);
    displayChosenItems(newItems);
    oldItems = newItems;
}




