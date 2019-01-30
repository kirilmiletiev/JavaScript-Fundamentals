function solve() {

    let str1 = document.getElementById("str1");
    let str2 = document.getElementById("str2");
    let result = document.getElementById("result");

    let str2Split = str2.value.toLowerCase().split(" ");

    if (str2Split[0] === "pascal") {
        let str1Split = str1.value.toLowerCase().split(" ");
        for (let i of str1Split) {
            result.textContent += i[0].toUpperCase();
            for (let j = 1; j < i.length; j++) {
                result.textContent += i[j];
            }
        }
    } else if (str2Split[0] === "camel") {

        let str1Split = str1.value.toLowerCase().split(" ");
        for (let i = 0; i < str1Split.length; i++) {

            for (let j = 0; j < str1Split[i].length; j++) {
                if (j === 0 && i === 0) {
                    result.textContent += str1Split[i][j].toLowerCase();
                } else if (j === 0 && i !== 0) {
                    result.textContent += str1Split[i][j].toUpperCase();
                } else {
                    result.textContent += str1Split[i][j];
                }
            }
        }
    } else {
        result.textContent = "Error!";
    }
}