function solve() {
    let input = document.getElementById('arr').value;
    let rawText = '';
    let arrayToPrint = [];
    let resultElement = document.getElementById('result');

    for (let i of input) {
        if (i !== '[' && i !== ']' && i !== '"') {
            rawText += `${i}`;
        }
    }

    let arrFromReversedStr = Array(rawText.split(', '));

    for (let str of arrFromReversedStr) {
        for (let revWord of str) {
            let word = '';
            for (let char = revWord.length - 1; char >= 0; char--) {
                if (char === revWord.length - 1) {
                    word += `${revWord[char].toUpperCase()}`;
                } else {word += `${revWord[char]}`;}
            }
            arrayToPrint.push(word);
        }
    }
    resultElement.innerHTML = arrayToPrint.join(' ');
}