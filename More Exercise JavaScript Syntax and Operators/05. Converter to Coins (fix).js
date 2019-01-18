function Coins(amount, values) {
    let coins = values.sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < coins.length; i++) {

        if (amount - coins[i] >= 0) {
            result.push(coins[i]);
            amount -= coins[i];
            i = -1;
        }
    }
    return result.join(", ");
}