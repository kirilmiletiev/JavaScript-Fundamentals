function solve() {
    let str = document.getElementById('str').value;
    let text = document.getElementById('text').value;
    let result = document.getElementById('result');

    let pattern = /(north|east)[\s\S]*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let match = pattern.exec(text);
    let north = '';
    let east = '';

    while (match) {
        if (match[1].toLowerCase() === 'north') {
            north = `${match[2]}.${match[3]} N`;
        } else {
            east = `${match[2]}.${match[3]} E`;

        }

        match = pattern.exec(text);
    }

    let messageRegex = new RegExp(`${str}(.*?)${str}`, 'gim');
    let message = `Message: ${messageRegex.exec(text)[1]}`;

    let p1 = document.createElement('p');
    p1.textContent = north;
    result.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = east;
    result.appendChild(p2);

    let p3 = document.createElement('p');
    p3.textContent = message;
    result.appendChild(p3);
}