function solve() {
  let divElements = document.querySelectorAll('#exercise div');

  for (let i = 0; i < divElements.length; i++) {
    let element = divElements[i];
    element.id = `link${i}`;
    element.children[0].addEventListener('click', function() {
      let spanElement = document.querySelector(`#${element.id} span`);

      let count = spanElement.textContent.match(/\d+/);
      spanElement.textContent = spanElement.textContent.replace(/\d+/, ++count);
    });
  }
}