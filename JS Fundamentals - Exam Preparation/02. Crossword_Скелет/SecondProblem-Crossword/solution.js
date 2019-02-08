function solve() {
    let input = document.getElementById('input');
    let buttons = document.getElementsByTagName('button');

    let outputPElement = document.getElementById('output').lastElementChild;

    let filterBtn = buttons[0].addEventListener('click', () => {

        let filterCommand = document.getElementById('filterSecondaryCmd');
        let filterPosition = document.getElementById('filterPosition');

        let uppercaseLetters = [];
        let lowerCaseLetters = [];
        let nums = [];

        if (filterCommand.value.toLowerCase() === 'uppercase') {
            for (let i of input.value) {
                if (!parseInt(i)) {

                    if (i === i.toUpperCase() && i !== '0') {
                        uppercaseLetters.push(i);
                    }
                }
            }
        } else if (filterCommand.value.toLowerCase() === 'lowercase') {
            for (let i of input.value) {
                if (!parseInt(i)) {
                    if (i === i.toLowerCase()) {
                        lowerCaseLetters.push(i);
                    }
                }
            }
        } else if (filterCommand.value.toLowerCase() === 'nums') {
            for (let i of input.value) {
                if (parseInt(i) || i === '0') {
                    nums.push(i);
                }
            }
        }
        if (uppercaseLetters[Number(filterPosition.value) - 1] !== undefined) {
            outputPElement.textContent += uppercaseLetters[Number(filterPosition.value) - 1];
        }
        if (lowerCaseLetters[Number(filterPosition.value) - 1] !== undefined) {
            outputPElement.textContent += lowerCaseLetters[Number(filterPosition.value) - 1];
        }
        if (nums[Number(filterPosition.value) - 1] !== undefined) {
            outputPElement.textContent += nums[Number(filterPosition.value) - 1];
        }

        input.value = '';
        filterCommand.value = '';
        filterPosition.value = '';
    });

    let sortBtn = buttons[1].addEventListener('click', () => {

        let letters = [];
        let orderedLetters = [];
        let sortSecondaryCmd = document.getElementById('sortSecondaryCmd').value;
        let position = document.getElementById('sortPosition');

        for (let i of input.value) {
            if (!parseInt(i)) {
                letters.push(i);
            }
        }
        if (sortSecondaryCmd === 'A') {
            orderedLetters = letters.sort(); //sorts in alphabetical and ascending order.
        } else if (sortSecondaryCmd === 'Z') {
            orderedLetters = letters.sort().reverse();
        }
        if (orderedLetters[Number(position.value) - 1] !== undefined) {
            outputPElement.textContent += orderedLetters[Number(position.value) - 1];
        }
        input.value = '';
        sortSecondaryCmd = '';
        position.value = '';
    });

    let rotateBtn = buttons[2].addEventListener('click', () => {

        let rotateSecondaryCmd =Number(document.getElementById('rotateSecondaryCmd').value);
        let rotatePosition =Number(document.getElementById('rotatePosition').value);

        let arr = input.value.split('');

        for (let i = 0; i < rotateSecondaryCmd; i++) {
            let lastIndexOfArr = arr.pop();

            arr.unshift(lastIndexOfArr);
        }

        if (arr[rotatePosition-1] !== undefined){
            outputPElement.textContent += `${arr[rotatePosition-1]}`;
        }
        input.value = '';
        rotateSecondaryCmd = '';
        rotatePosition = '';
    });

    let getBtn = buttons[3].addEventListener('click', () => {

        let position = Number(document.getElementById('getPosition').value);
        let arr = input.value.split('');

        if (arr[position-1] !== undefined){
            outputPElement.textContent +=  arr[position-1];
        }
        input.value = '';
        position = '';
    });
}