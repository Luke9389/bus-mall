import products from './products.js';
import { findProduct } from './register.js';

const store = {
    storage: window.localStorage,

    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getRoundHistory() {
        let products = store.get('round-history');

        if (!products) {
            products = [];
        }
        return products;
    },
    selectProduct(img) {
        const roundHistory = store.getRoundHistory();
        const product = findProduct(roundHistory, img);

        if (product) {
            product.quantity += 1;
        } else {
            const order = {
                img: img,
                quantity: 1,
            };
            roundHistory.push(order);
        }
        store.save('round-history', roundHistory);
    },
    
}

export default store;