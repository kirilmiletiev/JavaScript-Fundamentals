function cities(arr) {
    let map = new Map();
    for (let value of arr) {
        let [town, product, quantity, price] = value.split(/ -> | : /);
        if (!map.has(town)) {
            map.set(town, new Map());
        }
        map.get(town).set(product, +quantity * +price);
    }
    for (let [key, value] of map) {
        console.log(`Town - ${key}`);
        for (let [k, v] of value) {
            console.log(`$$$${k} : ${v}`);
        }
    }
}