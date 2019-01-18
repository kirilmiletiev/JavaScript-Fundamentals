function CalorieIntake(arr, workouts) {

    let gender = arr[0];
    let weight = arr[1];
    let height = arr[2];
    let age = arr[3];

    let  calories;
    let result;

    if (gender == 'f') {
        calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }
    else if (gender == 'm') {
        calories = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    }
    

        if (workouts <=0){
            result = 1.2 * calories
        }
        else if (workouts >= 1 && workouts <= 2) {
            result = 1.375 * calories;
        }
        else if (workouts >= 3 && workouts <= 5) {
            result = 1.55 * calories;
        }
        else if (workouts >= 6 && workouts <= 7) {
            result = 1.725 * calories;
        }
        else if (workouts > 7) {
            result = 1.90 * calories;
        }


        console.log(Math.round(result));

}

CalorieIntake(['m', 86, 185, 25], 3);