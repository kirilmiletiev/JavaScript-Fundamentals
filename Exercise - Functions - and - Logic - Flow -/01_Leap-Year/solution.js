function leapYear() {
    let button = document.getElementsByTagName('button')[0];
    let year = document.querySelector('#year h2');
    let inputYearResult = document.querySelector('#year div');
    let result = '';

    button.addEventListener('click', action);

    function action(){
        let inputYear = Number(document.querySelector('#exercise input').value);
        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            result = 'Leap Year';

        }else{
            result = 'Not Leap Year';
        }
        year.textContent = result;
        inputYearResult.textContent = inputYear;
        document.querySelector('#exercise input').value = '';

    }
}