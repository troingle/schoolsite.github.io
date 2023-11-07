document.addEventListener("DOMContentLoaded", function() {
    var randomNum = Math.floor(Math.random() * 9) + 2;
    var randomNumberElement = document.getElementById("randomNumber");

    randomNumberElement.textContent = randomNum;
});

const names = [
    'Heimo Mäkeläinen',
    'Taina Veijarila',
    'Hermanni Suo',
    'Sirpa Niinistö',
    'Milla Kontio',
    'Veikko Rantanen',
    'Juha Leskinen'
]

const mails = [
    'heimo.mäkeäläinen@hotmail.com',
    'taina.veijarila@syk.fi',
    'hermanni.suo@gmail.com',
    'sirpa.niinistö@syk.fi',
    'milla.kontio@gov.de',
    'veikko.rantanen@gmail.com',
    'juhaleskinen@pieksämail.net'
]

const imageFiles = ['tutor1.jpeg', 'tutor2.jpeg', 'tutor3.jpeg'];

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return mails[randomIndex];
}



function updatePage() {
    const mail = getRandomName();
    const randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById('name').textContent = names[randomIndex] + " - " + mail;

    var emailLink = document.getElementById("emailLink");
    emailLink.href = "mailto:" + mail;

}

updatePage();
