function solve() {

    let text = document.getElementById('string').value;
    let result = '';
    let resultElement = document.getElementById('result');

    for (let i of text) {
        if (i === ' ') {
            result += i;
        }
        if (result.indexOf(i) === -1) {
            result += i;
        }
        console.log(i);
    }

    resultElement.innerHTML = result;
}