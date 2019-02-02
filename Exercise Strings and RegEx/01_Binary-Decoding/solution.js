function solve() {
    let input = document.getElementById('str').value;
    let sum = getDigitSum(input);
    let binary = input.substr(sum, input.length - 2 * sum);
    let binaryArray = getBinaryElement(binary);
    let result = getSymbols(binaryArray);

    result = result.replace(/[,]/g, '');
    result = result.replace(/[^\w\s\*]/g, '');
    result = result.replace(/[0-9_]/g, '');
    result = result.replace('*', ' ');

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;

    function getSymbols(binaryArray) {
        let result = '';
        for (let item of binaryArray) {
            result += String.fromCharCode(Number(item));
        }

        return result;
    }

    function getBinaryElement(binary) {
        let array = [];
        while (binary.length !== 0) {
            let binaryCode = binary.substr(0, 8);
            binary = binary.substring(8);
            let number = parseInt(binaryCode, 2);
            array.push(number);
        }

        return array;
    }

    function getDigitSum(input) {
        let array = input.split('').filter(x => x !== '');
        let sum = 0;
        for (let item of array) {
            sum += Number(item);
        }

        let number = sum;
        while (number >= 10) {
            let sumArray = number.toString().split('').filter(x => x !== '');
            number = 0;
            for (let item of sumArray) {
                number += Number(item);
            }
        }

        return number;
    }
}