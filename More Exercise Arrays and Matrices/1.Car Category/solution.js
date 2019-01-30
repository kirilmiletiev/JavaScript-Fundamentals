function solve() {
    let arr = document.querySelector("input[type=text]").value;
    let btn = document.querySelector("input[type=button]");

    let BulgarianArmy = 0;
    let CivilProtection = 0;
    let Diplomatic = 0;
    let Foreigners = 0;
    let Province = 0;
    let Sofia = 0;
    let Transient = 0;


    let midArr = [];

    let singleEntity = "";
    let kavichkaCounter = 0;

    for (let i of arr) {

        if (i === "\"") {
            kavichkaCounter++;
        }

        if (kavichkaCounter % 2 === 1 && i !== "," && i !== "" && i !== ", " && i !== "\"") {
            // console.log(i);
            singleEntity += i;
        } else if (kavichkaCounter % 2 === 0) {
            midArr.push(singleEntity);
            singleEntity = "";
        }
    }

    let finalArr = [];

    for (let i of midArr) {
        if (i === "") {
            //console.log("*")
        } else {
            finalArr.push(i)
        }
    }

    for (let i of finalArr) {

        if (i[0] === "C" && i[1] === " " && i.length === 6) {
            // console.log(`DIPLOMATIC ${i}`)
            Diplomatic++;
        }
        if (i[1] === "T" && i.length === 7) {
            Diplomatic++;
            //console.log(`DIPLOMATIC ${i}`)
        }
        if (i[0] === "B" && i[1] === "A" && i.length === 10) {
            BulgarianArmy++;
            //console.log(`ARMY ${i}`)
        }
        if (i[0] === "C" && i[1] === "P" && i.length === 9) {
            CivilProtection++
            // console.log(`CIVIL PROTECTION ${i}`)
        }
        if (i[0] === "X" && i[1] === "X" && i.length === 7) {
            Foreigners++;
            // console.log(`Foreigners  ${i}`)
        }
        if (parseInt(i[0]) && parseInt(i[1]) && parseInt(i[2]) && isLetter(i[4]) && i.length === 9) {
            Transient++;
            // console.log(`Transient ${i}`)
        }
        if (i[0] === "C" && (i[1] === "A" || i[1] === "B" || i[1] === " ") && (i.length === 10 || i.length === 9 || i.length === 8)) {
            Sofia++;
            //  console.log(`Sofia   ${i}`)
        }

        if (isLetter(i[0]) && i[1] === " " && i.length === 9 && i[0] !== "C") {
            Province++
            // console.log(`Province  ${i}`)
        }

        function isLetter(c) {
            return c.toLowerCase() !== c.toUpperCase();
        }

    }

    let result = document.getElementById("result");

    let Other = finalArr.length - (BulgarianArmy + CivilProtection + Diplomatic + Foreigners + Province + Sofia + Transient)
    let resultArr = [];

    resultArr.push(`BulgarianArmy -> ${BulgarianArmy}`);
    resultArr.push(`CivilProtection -> ${CivilProtection}`);
    resultArr.push(`Diplomatic -> ${Diplomatic}`);
    resultArr.push(`Foreigners -> ${Foreigners}`);
    resultArr.push(`Province -> ${Province}`);
    resultArr.push(`Sofia -> ${Sofia}`);
    resultArr.push(`Transient -> ${Transient}`);
    resultArr.push(`Other -> ${Other}`);


    //console.log(`RESULT ARR IS ${resultArr.length} LENGHT`);
    resultArr.sort((a, b) => b-a);
    resultArr.sort().reverse();
    for (let i of resultArr ){

        let p = document.createElement("p");
        p.textContent = i;
        result.appendChild(p);
        //console.log(i);
    }
}