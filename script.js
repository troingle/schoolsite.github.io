document.addEventListener("DOMContentLoaded", function() {
    var randomNum = Math.floor(Math.random() * 9) + 2;
    var randomNumberElement = document.getElementById("randomNumber");

    randomNumberElement.textContent = randomNum;
});

const names = [
    'H. Mäkeläinen',
    'T. Veijarila',
    'H. Suo',
    'S. Niinistö',
    'M. Kontio',
    'V. Rantanen',
    'J. Leskinen'
]

const imageFiles = ['tutor1.jpeg', 'tutor2.jpeg', 'tutor3.jpeg'];

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return imageFiles[randomIndex];
}

function updatePage() {
    const randomName = getRandomName();
    const randomImage = getRandomImage();

    document.getElementById('name').textContent = randomName;
    document.getElementById('image').src = randomImage;
}

updatePage();
