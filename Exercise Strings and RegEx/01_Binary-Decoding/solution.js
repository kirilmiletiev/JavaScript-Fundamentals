function solve() {
    let string = document.getElementById("str").value;
    let sum = 0;
    let numberOfLettersToRemove = 0;
    let counter = 0;

    let arrOfBinaryTokens = [];
    let token = "";

    let resultString = "";

    for (let i of string) {
        sum += Number(i);
    }

    while (sum >= 55){

        let sumToLoop = sum;
        sum = 0;
        for (let i of sumToLoop.toString()){

            sum += Number(i);
        }
    }


    for (let i of sum.toString()) {
        // debugger;
        numberOfLettersToRemove += Number(i);
    }

    for (let i = numberOfLettersToRemove; i <= string.length - numberOfLettersToRemove; i++) {

        if (counter === 8) {
            arrOfBinaryTokens.push(token);
            token = "";
            counter = 0;
        }
        token += string[i];
        counter++;
    }


    for (let i of arrOfBinaryTokens) {
        //console.log(i);
        resultString += String.fromCharCode(parseInt(i, 2));
        //console.log(String.fromCharCode(parseInt(i,2)));
    }

    let result = document.getElementById("result");
    result.textContent = resultString;
}