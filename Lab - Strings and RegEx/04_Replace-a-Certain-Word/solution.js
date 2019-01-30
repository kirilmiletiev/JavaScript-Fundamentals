function solve() {

    let arr = JSON.parse(document.getElementById("arr").value);
    let str = document.getElementById("str").value;
    let result = document.getElementById("result");

    let wordToReplace = arr[0].split(" ")[2];

    let regex = new RegExp(wordToReplace, 'gim');

    for (let i of arr) {

       let textResult =  i.replace(regex, str);

       let p = document.createElement("p");
       p.innerHTML = textResult;

       result.appendChild(p);

      // console.log(result);
    }
}