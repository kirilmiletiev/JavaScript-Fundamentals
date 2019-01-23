function solve() {
    let result = 0;
    let questions = 0;
    let sectionElements = document.getElementsByTagName('section');

    for (let sectionElement of sectionElements) {
        let buttonElement = sectionElement.querySelector('button');

        buttonElement.addEventListener('click', clickEvent);

        function clickEvent(e) {
            let parentElement = buttonElement.parentElement;
            let radioElements = parentElement.querySelectorAll('input');

            for (let radioButton of radioElements) {
                if (radioButton.checked) {
                    questions++;

                    if (questions === 1) {
                        if (radioButton.value === '2013') {
                            result++;
                        }
                    } else if (questions === 2) {
                        if (radioButton.value === 'Pesho') {
                            result++;
                        }
                    } else if (questions === 3) {
                        if (radioButton.value === 'Nakov') {
                            result++;
                        }
                    }

                    if (questions < 3) {
                        sectionElements[questions].style.display = 'block';
                    } else {
                        let resultElement = document.getElementById('result');
                        if (result === 3) {
                            resultElement.textContent += 'You are recognized as top SoftUni fan!';
                        } else {
                            resultElement.textContent += `You have ${result} right answers`;
                        }
                    }
                }
            }
        };
    };
}