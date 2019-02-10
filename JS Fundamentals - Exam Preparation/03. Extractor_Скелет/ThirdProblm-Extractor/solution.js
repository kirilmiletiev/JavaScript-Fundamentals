function solve() {
    let outputElement = document.getElementById("output");
    let button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", ()=>{
        let input = document.getElementById("input").value;
        let number = Number(input.match(/\d+/g)[0]);
        input = input.substring(number.toString().length);
        input = input.substr(0, number);
        let splitDelimeter = input.slice(-1);
        input = input.slice(0, -1);

        let inputParts = input.split(splitDelimeter);
        let firstPart = inputParts[0];
        let secondPart = inputParts[1];

        let regex = new RegExp("[^" + firstPart + "]", "g");
        let result = secondPart.match(regex).join("").split("#").join(" ");
        outputElement.textContent = result.toString();
    });
}