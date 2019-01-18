function Numbers(input) {

    const regex = /\d+/gm;
    let str = input;
    let m;
    let suffix;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {

            // let num = match > 20 ? match % 10 : Number(match);
            let num = Number(match);
            if (num > 20) {
                num = match % 10;
            }

            switch (num) {
                case 1:
                    suffix = 'st';
                    break;
                case 2:
                    suffix = 'nd';
                    break;
                case 3:
                    suffix = 'rd';
                    break;
                default:
                    suffix = 'th';
                    break;
            }

            console.log(`${match}${suffix}`);
        });
    }
}
Numbers('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.');