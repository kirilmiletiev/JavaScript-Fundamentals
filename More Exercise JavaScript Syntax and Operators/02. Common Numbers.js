function CommonNum(arr1, arr2, arr3) {
    let temp = arr1.filter(function (value) {
        return arr2.indexOf(value) !== -1;
    });

    let newArr = temp.filter(function (value) {
        return arr3.indexOf(value) != -1;
    });

    let avg = newArr.reduce((a, b) => a + b, 0) / newArr.length;

    console.log(`The common elements are ${newArr.sort().join(', ')}.`);
    console.log(`Average: ${avg}.`);
    console.log(`Median: ${median(newArr)}.`);

    function median(values) {
        values.sort(function (a, b) {
            return a - b;
        });

        if (values.length == 0) return 0;

        let half = Math.floor(values.length / 2);

        if (values.length % 2)
            return values[half];
        else
            return (values[half - 1] + values[half]) / 2.0;
    }
}

CommonNum([1, 2, 3, 4, 5],
    [3, 2, 1, 5, 8],
    [2, 5, 3, 1, 16]);