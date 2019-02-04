function lowest(arr) {
    let map = new Map();
    for (let str of arr) {
        let [town, product, price] = str.split(' | ');
        if (!map.has(product)) {
            map.set(product, new Map());
        }
        map.get(product).set(town, +price);
    }
    for (let [key, value] of map) {
        let sorted = Array.from(value.keys()).sort((k1, k2) => {
            return value.get(k1) - value.get(k2);
        });
        console.log(`${key} -> ${value.get(sorted[0])} (${sorted[0]})`);
    }
}