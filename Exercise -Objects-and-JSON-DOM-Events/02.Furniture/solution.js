function solve() {
    let generateBtn = document.getElementsByTagName("button")[0];
    let buyBtn = document.getElementsByTagName("button")[1];
    let outputElement = document.getElementsByTagName("textarea")[1];
    let outputDiv = document.getElementById("furniture-list");

    generateBtn.addEventListener("click", generate);
    buyBtn.addEventListener("click", buy);

    function generate() {
        let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
        input.forEach(element => {
            let divElement = document.createElement("div");
            let name = document.createElement("p");
            let img = document.createElement("img");
            let price = document.createElement("p");
            let decFactorElement = document.createElement("p");
            let checkBoxElement = document.createElement("input");

            divElement.classList.add("furniture");
            name.textContent = `Name: ${element.name}`;
            img.src = element.img;
            price.textContent = `Price: ${element.price}`;
            decFactorElement.textContent = `Decoration factor: ${element.decFactor}`;
            checkBoxElement.type = "checkbox";

            divElement.appendChild(name);
            divElement.appendChild(img);
            divElement.appendChild(price);
            divElement.appendChild(decFactorElement);
            divElement.appendChild(checkBoxElement);
            outputDiv.appendChild(divElement);
        });
    }

    function buy() {
        let furnitureList = Array.from(document.querySelectorAll("#furniture-list .furniture"));
        let boughtFurnitureList = [];
        furnitureList.filter(p => p.children[4].checked).forEach(element => {
            let name = element.children[0].textContent.split(": ")[1];
            let price = Number(element.children[2].textContent.split(": ")[1]);
            let decFactor = Number(element.children[3].textContent.split(": ")[1]);

            let furniture = {
                name: name,
                price: price,
                decFactor: decFactor
            };

            boughtFurnitureList.push(furniture);
        });

        let totalPrice = boughtFurnitureList.map(x => x.price).reduce((a, b) => a + b);
        let averageDecoration = boughtFurnitureList.map(x => x.decFactor).reduce((a, b) => a + b) / boughtFurnitureList.length;

        outputElement.value += `Bought furniture: ${boughtFurnitureList.map(x => x.name).join(", ")}\n`;
        outputElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputElement.value += `Average decoration factor: ${averageDecoration}`;
    }
}