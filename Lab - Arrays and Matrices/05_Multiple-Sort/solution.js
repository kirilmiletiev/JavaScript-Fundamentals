function solve() {

    let listInput = JSON.parse(document.getElementById("arr").value);
    let sortAscending = [];
    let sortAlphabetically = [];

    function calc(input) {

        let resultContainer = document.getElementById("result");
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        sortAscending = input.sort((a, b) => a - b);
        div1.textContent = sortAscending.join(', ')

        resultContainer.appendChild(div1);

        sortAlphabetically = input.sort((a, b) => a.localeCompare(b));
        div2.textContent = sortAscending.join(', ')

        resultContainer.appendChild(div2);

    }
    calc(listInput);
}