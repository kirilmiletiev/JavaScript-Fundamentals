    function SameNums(nums) {

    let isSame = true;
    let singleNum;
    let sum = 0;
    let number = nums.toString()

        for (let num of number){
            sum += Number(num);
            singleNum = num;
        }

        for (let num of number){
            if (num != singleNum){
                isSame = false;
            }
        }
        console.log(isSame);
        console.log(sum);
    }
