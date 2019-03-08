function create(sentences) {

    for (let i of sentences) {
        let p = document.createElement('p');
        console.log(i);
        p.textContent = i;
        p.style.display = 'none';

        let div = document.createElement('div');
        div.appendChild(p);
        div.addEventListener('click', function () {
            p.style.display = 'block';
        });

        document.getElementById('content').appendChild(div);
    }
}