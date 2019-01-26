function solve() {
    let input = document.getElementById('arr');
    let resultElement = document.getElementById('result');
    let array = JSON.parse(input.value).map(x => parseInt(x, 10));

    printResult(array);

    function printResult(array) {
        for (let i = 0; i < array.length; i++) {
            let pElement = document.createElement('p');
            pElement.textContent = `${i} -> ${array[i] * array.length}`;
            resultElement.appendChild(pElement);
        }
    }
}