function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    daysBtn.addEventListener('click', function () {

        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 1440;
        seconds.value = Number(days.value) * 86400;
    });

    hoursBtn.addEventListener('click', function () {

        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(hours.value) * 3600;
    });

    minutesBtn.addEventListener('click', function () {

        days.value = Number(minutes.value) / 1440;
        hours.value = Number(minutes.value) / 60;
        seconds.value = Number(minutes.value) * 60;
    });

    secondsBtn.addEventListener('click', function () {

        days.value = Number(seconds.value) / 86400;
        hours.value = Number(seconds.value) / 3600;
        minutes.value = Number(seconds.value) / 60;
    });
}