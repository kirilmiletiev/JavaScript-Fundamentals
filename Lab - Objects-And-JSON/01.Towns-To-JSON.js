function townToJson(input) {
    let result = [];
    for (let i of input) {
        let arr = i.split('|').map(x => x.trim()).filter(x => x !== "");

        if (i !== input[0]) {
            let Town = arr[0];
            let Latitude = Number(arr[1]);
            let Longitude = Number(arr[2]);

            let resultToken = {
                Town,
                Latitude,
                Longitude
            };
            result.push(resultToken);
        }
    }
    console.log(JSON.stringify(result));
}