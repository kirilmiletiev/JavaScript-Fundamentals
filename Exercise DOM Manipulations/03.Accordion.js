function toggle() {
    let button = document.querySelector('span.button');

    if (button.textContent === 'More') {
        document.getElementById('extra').style.display = 'block';
        button.textContent = 'Less';
    } else {
        document.getElementById('extra').style.display = 'none';
        button.textContent = 'More';
    }
}