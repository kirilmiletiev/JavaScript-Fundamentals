function sumByTown(input) {
    let result = {};
    for (let i = 0; i < input.length; i += 2) {
        result[input[i]] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            result[input[i]] += +input[i + 1];
        }
    }

    return JSON.stringify(result);
}