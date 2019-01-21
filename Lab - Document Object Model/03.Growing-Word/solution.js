function solve() {
   let clicks = 0;
   document.querySelector('button').addEventListener('click', () => {
      let paragraphElement = document.querySelector('#exercise p');

      if (clicks % 3 === 0) {
         paragraphElement.style.color = 'blue';
      }
      else if (clicks % 3 === 1) {
         paragraphElement.style.color = 'green';
      }
      else if (clicks % 3 === 2) {
         paragraphElement.style.color = 'red';
      }

      clicks++;
      paragraphElement.style.fontSize = `${clicks * 2}px`;
   });
}