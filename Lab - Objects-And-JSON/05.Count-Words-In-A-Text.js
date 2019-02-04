function countWords(input) {
    let words = {};
    input[0].split(/[^\w]+/).filter(a => a !== '').forEach(element => {
        if (!words.hasOwnProperty(element)) {
            words[element] = 0;
        }

        words[element]++;
    });

    return JSON.stringify(words);
}