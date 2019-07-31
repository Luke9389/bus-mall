//from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

export function shuffle(array) {
    let counter = array.length;

    let index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        console.log('index: ',index);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
        // console.log(array);
    }
}