function solve() {
    let input = document.getElementById("str").value;
    let result = document.getElementById("result");
    let split = input.split(", ");
    let text = split[0];
    let mode = split[1];

    let nameRegex = /( [A-Z]+[a-z]*-[A-Z]+[a-z]* )|( [A-Z]+[a-z]*-([A-Z]+[a-z]*\.)-[A-Z]+[a-z]* )/g;

    let airportRegex = /( [A-Z]{3}\/[A-Z]{3} )/g;

    let flightRegex = /( [A-Z]{1,3}[0-9]{1,5} )/g;

    let companyRegex = /(- [A-Z]+[a-z]*\*[A-Z]+[a-z]* )/g;


    switch (mode) {
        case "flight":
            getFlight(text);
            break;
        case "name":
            getName(text);
            break;
        case "company":
            getCompany(text);
            break;
        case "all":
            getAll(text);
            break;
    }

    function getFlight(text) {
        let airport = text
            .match(airportRegex)
            .toString().trim()
            .split("/");
        let flightNumber = text.match(flightRegex)
            .toString()
            .trim();

        result.textContent = `Your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}.`;
    }

    function getName(text) {
        let name = text
            .match(nameRegex)
            .toString()
            .trim()
            .split("-")
            .join(" ");

        result.textContent = `Mr/Ms, ${name}, have a nice flight!`;
    }

    function getCompany(text) {
        let company = text
            .match(companyRegex)
            .toString()
            .trim()
            .substring(2)
            .split("*")
            .join(" ");


        result.textContent = `Have a nice flight with ${company}.`;
    }

    function getAll(text) {
        let airport = text
            .match(airportRegex)
            .toString()
            .trim()
            .split("/");

        let flightNumber = text
            .match(flightRegex)
            .toString()
            .trim();

        let name = text
            .match(nameRegex)
            .toString()
            .trim()
            .split("-")
            .join(" ");

        let company = text
            .match(companyRegex)
            .toString()
            .trim()
            .substring(2)
            .split("*")
            .join(" ");


        result.textContent = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`;
    }
}