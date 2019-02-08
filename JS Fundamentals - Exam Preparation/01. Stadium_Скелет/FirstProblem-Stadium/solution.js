function solve() {
    let profit = 0;
    let fans = 0;
    let output = document.getElementById("output");
    let seats = document.getElementsByClassName('seat');
    let summaryButton = document.querySelector("#summary button");

    for (let i = 0; i < seats.length; i++) {

        seats[i].addEventListener('click', () => {

            let sector = String.fromCharCode(65 + i % 3);
            let seatNumber = seats[i].textContent;
            let zone = seats[i].parentNode.parentNode.parentNode.parentNode.parentElement.className;

            if (seats[i].style.backgroundColor !== "") {
                output.textContent += ` Seat ${seatNumber} in zone ${zone} sector ${sector} is unavailable.\n`;
            } else {
                if (zone === "Levski" || zone === "Litex") {
                    if (sector === "A") {
                        profit += 10;
                    } else if (sector === "B") {
                        profit += 7;
                    } else if (sector === "C") {
                        profit += 5;
                    }
                } else if (zone === "VIP") {
                    if (sector === "A") {
                        profit += 25;
                    } else if (sector === "B") {
                        profit += 15;
                    } else if (sector === "C") {
                        profit += 10;
                    }
                }
                seats[i].style.backgroundColor = "rgb(255, 0, 0)";
                fans++;
                output.textContent += ` Seat ${seatNumber} in zone ${zone} sector ${sector} was taken.\n`;
            }
        });
    }

    let summary = document.getElementById('summary').firstChild;
    summary.addEventListener('click', () => {
        let span = document.getElementsByTagName('span')[0];
        span.textContent = `${profit} leva, ${fans} fans.`
    });
}