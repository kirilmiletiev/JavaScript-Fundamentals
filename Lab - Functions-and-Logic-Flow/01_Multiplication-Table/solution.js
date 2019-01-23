function solve() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let result = document.getElementById('result');

    if (num1 > num2) {
        result.innerHTML = 'Try with other numbers.';
    } else {

        for (let i = num1; i <= num2; i++) {
            let p = document.createElement('p');
            p.innerHTML = `${i} * ${num2} = ${i * num2}`;

            result.appendChild(p);
        }
    }
}