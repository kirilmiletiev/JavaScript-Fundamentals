function countWordsWithMaps(input) {
    let map = new Map();
    input.join(' ').toLowerCase().split(/\W+/)
        .filter(a => a !== '')
        .forEach(w => {
            if (!map.has(w)) {
                map.set(w, 0);
            }
            map.set(w, map.get(w) + 1);
        });
    let sortedKeys = Array.from(map.keys()).sort();
    for (let value of sortedKeys) {
        console.log(`'${value}' -> ${map.get(value)} times`);
    }
}