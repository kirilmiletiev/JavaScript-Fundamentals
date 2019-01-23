function solve() {
    let buttonElement = document.querySelector('button');
    buttonElement.addEventListener('click', clickEvent);

    function clickEvent(e) {
        let inputNumbers = document.querySelector('input');
        let numbers = inputNumbers.value.split(' ');
        let isValidNumbers = true;
        if (numbers.length === 6) {
            for (let number of numbers) {
                let parsed = parseInt(number, 10);
                if (parsed) {
                    if (Number(number) < 1 || Number(number) > 49)  {
                        isValidNumbers = false;
                        break;
                    }
                } else {
                    isValidNumbers = false;
                    break;
                }
            }
        } else {
            isValidNumbers = false;
        }

        if (isValidNumbers === true) {
            inputNumbers.disabled = true;
            buttonElement.disabled = true;
            let allNumbersElement = document.getElementById('allNumbers');

            for (let i = 1; i <= 49; i++) {
                let divElement = document.createElement('div');
                divElement.textContent = i;
                divElement.classList.add('numbers');
                if (numbers.indexOf(`${i}`) > -1) {
                    divElement.style.background = 'orange';
                }
                allNumbersElement.appendChild(divElement);
            }
        }
    }
}