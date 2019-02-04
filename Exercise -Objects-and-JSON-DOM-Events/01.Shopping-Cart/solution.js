function solve() {
    let textArea = document.getElementsByTagName('textarea')[0];
    let obj = {Milk: 0, Bread: 0, Tomatoes: 0};
    let addMilkBtn = document.getElementsByClassName('product')[0].addEventListener('click', () => {
        textArea.value += `Added Milk for 1.09 to the cart.\n`;
        obj.Milk += Number(1.09)
    });
    let addBreadBtn = document.getElementsByClassName('product')[1].addEventListener('click', () => {
        textArea.value += `Added Bread for 0.80 to the cart.\n`;
        obj.Bread += Number(0.80);
    });
    let addTomatoesBtn = document.getElementsByClassName('product')[2].addEventListener('click', () => {
        textArea.value += `Added Tomatoes for 0.99 to the cart.\n`;
        obj.Tomatoes += Number(0.99);
    });

    let buyButton = document.getElementsByTagName('button')[3].addEventListener('click', () => {
        let addedProducts = [];
        let totalPrice = 0;
        for (let i in obj) {
            if (obj[i] > 0) {
                totalPrice += obj[i];
                addedProducts.push(i.toString());
            }
        }
        textArea.value += `You bought ${addedProducts.join(", ")} for ${totalPrice.toFixed(2)}.\n`
    });
}