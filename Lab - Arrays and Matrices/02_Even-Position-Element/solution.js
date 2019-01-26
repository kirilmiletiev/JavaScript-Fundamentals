function solve() {
    let input = JSON.parse(document.getElementById("arr").value).map(Number);
    let result = document.getElementById('result');
    let parsedArr = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            parsedArr.push(parseInt(input[i]));
        }
    }
    result.innerHTML = parsedArr.join(' x ');
}