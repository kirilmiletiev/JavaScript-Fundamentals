function solve() {
    let str = document.getElementById("str").value;
    let num = document.getElementById("num").value;

    function splitString(str, num) {
        debugger;
        let arr = [];
        let indexCounter = 0;

        if (str.length % num !== 0) {
            let len = str.length;
            let symbolsCount = 0;

            while (len % num !== 0) {
                len %= num;
                len++;
                symbolsCount++;
            }

            for (let i = 0; i < symbolsCount; i++) {
                str += str[indexCounter];
                indexCounter++;
            }
        }

        for (let i = 0; i < str.length; i += Number(num)) {
            console.log(i);
            arr.push(str.substr(i, num));
        }
        document.getElementById("result").innerHTML = arr.join(' ');
    }

    splitString(str, num);
}