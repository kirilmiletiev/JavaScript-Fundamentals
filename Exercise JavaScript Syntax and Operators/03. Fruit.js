function FruitTotal(frut, weight, pricePerKilo) {

    let result = 0;

    let weightInKg = weight/1000;

    result = weightInKg*pricePerKilo;

    console.log(`I need ${result.toFixed(2)} leva to buy ${weightInKg.toFixed(2)} kilograms ${frut}.`);
}
