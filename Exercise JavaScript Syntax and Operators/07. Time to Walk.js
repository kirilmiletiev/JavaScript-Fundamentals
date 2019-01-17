function walk(steps, footprintLength, speed){
    let distanceMtr = steps * footprintLength;
    let distanceKm = distanceMtr / 1000;
    let neededBreak = Math.floor(distanceMtr / 500);
    let seconds = Math.ceil((distanceKm / speed) * 60 * 60) + (neededBreak * 60);

    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor(seconds / 60);
    seconds -= mins * 60;

    var total = ('0' + hours).slice(-2) + ':' + ('0' + mins).slice(-2) + ':' + ('0' + seconds).slice(-2);

    console.log(total);
}