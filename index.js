function init() {
    document.querySelector('input').value = '';
}

function appendImageElem(keyword, index) {
    const imageElem = document.createElement('img')
    imageElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imageElem)
}

function removePhotos() {
    document.querySelector('.gallery').innerHTML = '';
}

function searchPhotos(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword) {
        removePhotos();
        for (i = 1; i <= 9; i++) {
            appendImageElem(keyword, i)
        }
    }
}

function run() {
    const inputElem = document.querySelector('input')
    inputElem.addEventListener('keydown', searchPhotos)
}

window.onload = init;
run();