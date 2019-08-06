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
    getAllTimeDisplays() {
        let displays = store.get('all-time-displays');
        if(!displays) {
            displays = [];
        }
        return displays;
    },
    getRoundDisplays() {
        let displays = store.get('round-displays');
        if(!displays) {
            displays = [];
        }
        return displays;
    },
    getRoundHistory() {
        let history = store.get('round-history');

        if(!history) {
            history = [];
        }
        return history;
    },
    getAllTimeHistory() {
        let history = store.get('all-time-history');

        if(!history) {
            history = [];
        }
        return history;
    },
    displayProduct(id) {
        const roundDisplays = store.getRoundDisplays();
        const product = findProduct(roundDisplays, id);

        if(product) {
            product.displays += 1;
        } else {
            const order = {
                id: id,
                displays: 1,
            };
            roundDisplays.push(order);
        }
        store.save('round-displays', roundDisplays);
    },
    selectProduct(id) {
        const roundHistory = store.getRoundHistory();
        const product = findProduct(roundHistory, id);

        if(product) {
            product.quantity += 1;
        } else {
            const order = {
                id: id,
                quantity: 1,
            };
            roundHistory.push(order);
        }
        store.save('round-history', roundHistory);
    },
    getId(product) {
        let id = product.id;
        return id;
    },
    recordAllTimeData() {
        const roundHistory = store.getRoundHistory();
        let allTimeHistory = store.getAllTimeHistory();
        let names = allTimeHistory.map(this.getId);
        if(allTimeHistory.length === 0) {
            allTimeHistory = roundHistory;
            store.save('all-time-history', allTimeHistory);
        } else {
            let i = 0;
            while(i < roundHistory.length) {
                if(!names.includes(roundHistory[i].id)) {
                    allTimeHistory.push(roundHistory[i]);
                    store.save('all-time-history', allTimeHistory);
                } else {
                    let write = findProduct(allTimeHistory, roundHistory[i].id);
                    write.quantity += roundHistory[i].quantity;
                    store.save('all-time-history', allTimeHistory);
                }
                i++;
            }
        }
    },
    recordDisplays() {
        const roundDisplays = store.getRoundDisplays();
        let allTimeDisplays = store.getAllTimeDisplays();
        let names = allTimeDisplays.map(this.getId);
        if(allTimeDisplays.length === 0) {
            allTimeDisplays = roundDisplays;
            store.save('all-time-displays', allTimeDisplays);
        } else {
            let i = 0;
            while(i < roundDisplays.length) {
                if(!names.includes(roundDisplays[i].id)) {
                    allTimeDisplays.push(roundDisplays[i]);
                    store.save('all-time-displays', allTimeDisplays);
                } else {
                    let write = findProduct(allTimeDisplays, roundDisplays[i].id);
                    write.displays += roundDisplays[i].displays;
                    store.save('all-time-displays', allTimeDisplays);
                }
                i++;
            }
        }
    },
    clearRoundData() {
        store.storage.removeItem('round-history');
        store.storage.removeItem('round-displays');
    },
};

export default store;