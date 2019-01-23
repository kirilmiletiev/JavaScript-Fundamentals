function solve() {
    let selectElements = document.getElementById('selectMenuTo');

    let optionFirstElement = document.createElement('option');
    optionFirstElement.value = 'binary';
    optionFirstElement.textContent = 'Binary';

    let optionSecondElement = document.createElement('option');
    optionSecondElement.value = 'hexadecimal';
    optionSecondElement.textContent = 'Hexadecimal';

    selectElements.appendChild(optionFirstElement);
    selectElements.appendChild(optionSecondElement);

    let buttonElement = document.getElementsByTagName('button')[0];

    buttonElement.addEventListener('click', clickEvent);

    function clickEvent(e) {
        let selectMenuToElement = document.getElementById('selectMenuTo');
        let inputNumber = document.getElementById('input').value;

        if (selectMenuToElement.value === 'binary') {
            let binaryResult = Number(inputNumber).toString(2);
            let resultElement = document.getElementById('result');
            resultElement.value = binaryResult;
        } else if (selectMenuToElement.value === 'hexadecimal') {
            let hexadeicmalResult = Number(inputNumber).toString(16);
            let resultElement = document.getElementById('result');
            resultElement.value = hexadeicmalResult.toUpperCase();
        }
    };
}