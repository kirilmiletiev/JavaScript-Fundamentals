function solve() {

    let text = document.getElementById('string').value;
    let char = document.getElementById('character').value;
    let count = 0;
    let result = document.getElementById('result');


    for (let i of text)
        if (i === char) {
            count++;
        }
    if (count % 2 === 0) {
        result.innerHTML = `Count of ${char} is even.`;
    } else if (count % 2 === 1) {
        result.innerHTML = `Count of ${char} is odd.`;
    }
}