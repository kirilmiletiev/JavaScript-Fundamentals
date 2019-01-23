function solve() {

     let startNum = Number(document.getElementById('firstNumber').value);
     let endNum = Number(document.getElementById('secondNumber').value);

     let str1 = document.getElementById('firstString').value;
     let str2 = document.getElementById('secondString').value;
     let str3 = document.getElementById('thirdString').value;
     let result = document.getElementById('result');

     for (let i = startNum; i <= endNum; i++) {

          if (i % 3 === 0 && i % 5 === 0) {
               let p = document.createElement('p');
               p.innerHTML = `${i} ${str1}-${str2}-${str3}`;
               result.appendChild(p);

          } else if (i % 3 === 0 && i % 5 !== 0) {
               let p = document.createElement('p');
               p.innerHTML = `${i} ${str2}`;
               result.appendChild(p);

          } else if (i % 5 === 0 && i % 3 !== 0) {
               let p = document.createElement('p');
               p.innerHTML = `${i} ${str3}`;
               result.appendChild(p);

          } else {
               let p = document.createElement('p');
               p.innerHTML = `${i}`;
               result.appendChild(p);
          }
     }
}