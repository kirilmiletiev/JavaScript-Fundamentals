
 function solve() {
     Array.from(document.getElementsByTagName('img')).forEach(img => {
         img.addEventListener('click', clickEvent);
     });

     function clickEvent(e) {
         let card = e.target;
         card.src = './images/whiteCard.jpg'
         card.removeEventListener('click', clickEvent);

         let player = card.parentNode;
         let spanElements = document.getElementById('result').children;

         if (player.id === 'player1Div') {
             spanElements[0].textContent = card.name;
         } else if (player.id === 'player2Div') {
             spanElements[2].textContent = card.name;
         }

         if (spanElements[0].textContent && spanElements[2].textContent) {
             let winner;
             let loser;

             if (Number(spanElements[0].textContent) > Number(spanElements[2].textContent)) {
                 winner = document.querySelector(`#player1Div img[name='${spanElements[0].textContent}']`);
                 loser = document.querySelector(`#player2Div img[name='${spanElements[2].textContent}']`);
             } else {
                 loser = document.querySelector(`#player1Div img[name='${spanElements[0].textContent}']`);
                 winner = document.querySelector(`#player2Div img[name='${spanElements[2].textContent}']`);
             }

             winner.style.border = '2px solid green';
             loser.style.border = '2px solid red';

             document.getElementById('history').textContent += `[${spanElements[0].textContent} vs ${spanElements[2].textContent}] `;

             spanElements[0].textContent = '';
             spanElements[2].textContent = '';
         }
     };
 }