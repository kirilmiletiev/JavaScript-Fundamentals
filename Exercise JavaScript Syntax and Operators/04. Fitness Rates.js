function Fintes(day, service, time) {

    let result = 0;

    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday'  ) {
        if (service == 'Fitness'){
            if (time>= 8.00 && time <= 15.00){
                result = 5;
            }else {
                result = 7.50;
            }
        }else if (service == 'Sauna') {
            if (time>= 8.00 && time <= 15.00){
                result = 4;
            }else {
                result = 6.50;
            }
        }else if (service == 'Instructor') {
            if (time>= 8.00 && time <= 15.00){
                result = 10;
            }else {
                result = 12.50;
            }
        }
    }else if (day == 'Saturday' || day == 'Sunday' ){

        if (service == 'Fitness'){
            result = 8.00;

        }else if (service == 'Sauna') {
            result = 7.00;
        }else if (service == 'Instructor') {
            result = 15.00;
        }
    }

    console.log(result);

}