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
        let history = store.get('round-history');

        if (!history) {
            history = [];
        }
        return history;
    },
    selectProduct(code) {
        const roundHistory = store.getRoundHistory();
        const product = findProduct(roundHistory, code);

        if (product) {
            product.quantity += 1;
        } else {
            const order = {
                code: code,
                quantity: 1,
            };
            roundHistory.push(order);
        }
        store.save('round-history', roundHistory);
    },

    
}

export default store;