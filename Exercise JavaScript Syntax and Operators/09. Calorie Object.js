function Calorie(arr) {

    let result = '{ ';


    for (var i = 0;  i < arr.length; i++)  {

        if (i % 2 == 0){

            result+= `${arr[i]}: `;
        }
        else if (i % 2 == 1 && i == arr.length-1) {

            result+= `${arr[i]} }`;
        }
        else if(i % 2 == 1 )  {
            result+= `${arr[i]}, `;
        }

    }

    console.log(result)
}