function Coins(coins, nums) {

    let result = [];
    let currentResult = 0;
    let target = Number(coins);

    for (let num of nums.sort(function (a, b) {return b - a})){

        if (num * 4 <= target && currentResult !== target && (currentResult + (4 * num)) <= target) {
            currentResult+= num;
            result.push(num);

            currentResult+= num;
            result.push(num);

            currentResult+= num;
            result.push(num);

            currentResult+= num;
            result.push(num);
        }
        else if (num * 3 <= target && currentResult !== target && (currentResult + (3 * num)) <= target) {
            currentResult+= num;
            result.push(num);

            currentResult+= num;
            result.push(num);

            currentResult+= num;
            result.push(num);
        }
        else if (num * 2 <= target && currentResult !== target && (currentResult + (2 * num)) <= target) {
            currentResult+= num;
            result.push(num);

            currentResult+= num;
            result.push(num);
        }
        else if (num  <= target && currentResult !== target && (currentResult + num) <= target) {
            currentResult+= num;
            result.push(num);
        }
        //console.log(num)
    }


    //console.log(`Current Result: ${currentResult}`);
    //console.log(result)

    let printResult = '' ;

    for (let i of result){

        if (i == result[result.length - 1]) {
            printResult += `${i}`;
        }else   {
            printResult += `${i}, `;
        }
        //console.log(i);
    }

    console.log(printResult);

}

Coins(123, [5, 50, 2, 1, 10]);