function Test(str, letter) {
    let count = 0;

    for(let char of str) {
        if(char == letter) {
            count++;
        }
    }
    console.log(count);
}