function solve() {
    
    let degrees = Number(document.getElementById('num1').value);
    let type = document.getElementById('type').value;
    let result = '';
    let convertedTemp = 0;
    let correctType = false;
    
    function convert(degrees, type) {
        if (type.toLowerCase() === 'fahrenheit'){
            convertedTemp = (((degrees - 32) * 5) / 9);
            correctType = true;
        } else if(type.toLowerCase() === 'celsius'){
            convertedTemp = ((degrees * 9) / 5) + 32;
            correctType = true;
        }
    }

    function print() {
        if (correctType){
            result = Math.round(convertedTemp);
        } else  {
            result = "Error!";
        }
    }

    convert(degrees, type);
    print(degrees, type);
    document.getElementById('result').innerHTML = result;
}