function CircleArea(radius) {

    let type = typeof radius;
    let result;

    if (type != 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }else  {
        result = Math.pow(radius,2) * Math.PI;
        console.log(result.toFixed(2));
    }

}