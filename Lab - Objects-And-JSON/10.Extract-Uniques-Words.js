function uniqueWords(arr) {
    let set = new Set();
    arr.join(' ').toLowerCase().split(/[^\w]+/)
        .filter(a => a !== '')
        .forEach(w => {
            set.add(w);
        });
    console.log(Array.from(set).join(', '));
}