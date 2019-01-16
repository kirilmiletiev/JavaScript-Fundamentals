function LargestNum(num1, num2, num3) {

    let biggestNum;

    if (num1 > num2 && num1 > num3){
        biggestNum = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        biggestNum = num2;
    }
    else if (num3 > num1 && num3 > num2) {
        biggestNum = num3;
    }

    console.log(`The largest number is ${biggestNum}.`);
}