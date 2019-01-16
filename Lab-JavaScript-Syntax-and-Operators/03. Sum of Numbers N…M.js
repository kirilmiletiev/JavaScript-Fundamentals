function SumNumbers(num1, num2) {

    let parsedNum1 = Number.parseFloat(num1);
    let parsedNum2 = Number.parseFloat(num2);
    let sum = 0;

    for (let i = parsedNum1; i<=parsedNum2; i++ ){
        sum+= i;
    }
    console.log(sum);
}

SumNumbers ('1', '5');