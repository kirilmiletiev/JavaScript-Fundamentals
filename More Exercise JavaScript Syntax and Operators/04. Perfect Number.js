function PerfectNum(input) {

    let perfectNumbersArr = [];//
    let result = '';
    for (let num of input){
        isPerfect(num);
    }

    for (let num of perfectNumbersArr){
        if (num == perfectNumbersArr[perfectNumbersArr.length-1]){
            result+= `${num}`;
        }else{
            result+= `${num}, `;
        }
    }

    function isPerfect(number)
    {
        var temp = 0;
        for(var i=1;i<=number/2;i++)
        {
            if(number%i === 0)
            {
                temp += i;
            }
        }

        if(temp === number && temp !== 0)
        {
            perfectNumbersArr.push(Number(number));
        }
    }
    console.log(result);
}

PerfectNum([5, 6, 28]);