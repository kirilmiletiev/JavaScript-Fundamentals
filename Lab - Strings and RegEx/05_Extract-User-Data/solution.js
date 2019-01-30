function solve() {
    let arr = JSON.parse(document.getElementById('arr').value);
    let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 \d{1} \d{3} \d{3}|\+359-\d{1}-\d{3}-\d{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/g;
    let result = document.getElementById('result');

    for (let item of arr) {
        let match = pattern.exec(item);
        if (match) {
            let nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${match[1]}`;
            let phoneNumberElement = document.createElement('p');
            phoneNumberElement.textContent = `Phone Number: ${match[2]}`;
            let emailElement = document.createElement('p');
            emailElement.textContent = `Email: ${match[3]}`;

            result.appendChild(nameElement);
            result.appendChild(phoneNumberElement);
            result.appendChild(emailElement);
        } else {
            let p = document.createElement('p');
            p.textContent = 'Invalid data';
            result.appendChild(p);
        }
        let secondElement = document.createElement('p');
        secondElement.textContent = '- - -';
        result.appendChild(secondElement);
    }
}