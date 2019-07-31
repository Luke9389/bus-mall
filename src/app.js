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
const turnTotal = 5;

renderItems();

leftButton.addEventListener('click', () => {
    let code = leftButton.value;
    store.selectProduct(code);
    renderItems();
    turns++;
    buttonDisableCheck(turns, turnTotal);
});
centerButton.addEventListener('click', () => {
    let code = centerButton.value;
    store.selectProduct(code);
    renderItems();
    turns++;
    buttonDisableCheck(turns, turnTotal);
});
rightButton.addEventListener('click', () => {
    let code = rightButton.value;
    store.selectProduct(code);
    renderItems();
    turns++;
    buttonDisableCheck(turns, turnTotal);
});

function chooseNewItems(oldItems) {
    const masterList = new Listings(products);
    masterList.removeItems(oldItems);
    newItems = masterList.getNRandomItems(3);
    return newItems;
}

function displayChosenItems(chosenItems) {
    imageLeft.src = chosenItems[0].image;
    leftButton.value = chosenItems[0].id;
    imageCenter.src = chosenItems[1].image
    centerButton.value = chosenItems[1].id;
    imageRight.src = chosenItems[2].image
    rightButton.value = chosenItems[2].id;
}

function renderItems() {
    newItems = chooseNewItems(oldItems);
    displayChosenItems(newItems);
    oldItems = newItems;
}

function buttonDisableCheck(turns, turnTotal) {
    if (turns === turnTotal) {
        leftButton.disabled = true;
        centerButton.disabled = true;
        rightButton.disabled = true;
    }

}


