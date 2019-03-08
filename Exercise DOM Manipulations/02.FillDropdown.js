function addItem() {
    let option = document.createElement('option');
    option.textContent = document.getElementById('newItemText').value;
    option.value = document.getElementById('newItemValue').value;

    document.getElementById('menu').appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
