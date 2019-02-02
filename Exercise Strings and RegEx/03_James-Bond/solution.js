function solve() {

  String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  };

  let arr = JSON.parse(document.getElementById("arr").value);
  let secretWord = arr[0];
  let result = document.getElementById("result");
  arr.shift();

  let message = arr;
  let pattern = RegExp(`(?<= |^)${secretWord}(?= |$) +([A-Z!%$#]{8,})(?=[ .,]|$)`, "gmi");

  for (let i = 0; i < message.length; i++) {
    let temp = pattern.exec(message[i]);
    while (temp) {
      if (!isLowerCase(temp[1])) {
        let decodedWord = getMessage(temp[1]);

        let fancyWord = temp[0].split(" ");

        message[i] = message[i].replaceAt(temp.index, fancyWord[0] + " " + decodedWord);

      }
      temp = pattern.exec(message[i]);
    }
    let pElement = document.createElement("p");
    pElement.innerHTML = message[i];
    result.appendChild(pElement);

  }

  function isLowerCase(str) {
    return (/[a-z]/.test(str));
  }
  

  function getMessage(word) {
    for (let i = 0; i < word.length; i++) {
      let element = word[i];
      if (element === "!") {
        word = word.replace("!", "1");
      } else if (element === "%") {
        word = word.replace("%", "2");
      } else if (element === "#") {
        word = word.replace("#", "3");
      } else if (element === "$") {
        word = word.replace("$", "4");
      }
    }

    word = word.toLowerCase();
    return word;
  }
}