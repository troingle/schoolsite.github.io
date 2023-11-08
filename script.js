document.addEventListener("DOMContentLoaded", function() {
    var randomNum = Math.floor(Math.random() * 9) + 2;
    var randomNumberElement = document.getElementById("randomNumber");

    randomNumberElement.textContent = randomNum;
});

// kaikki nimet keskittyjä - all names fictional

const names = [
    'Heimo Mäkeläinen',
    'Taina Veijarila',
    'Hermanni Suo',
    'Sirpa Niinistö',
    'Milla Kontio',
    'Veikko Rantanen',
    'Juha Leskinen',
    'Martti Kuninkaala',
    'Elkku Lohja'
]

const mails = [
    'heimo.mäkeläinen@hotmail.com',
    'taina.veijarila@syk.fi',
    'hermanni.suo@gmail.com',
    'sirpa.niinistö@syk.fi',
    'milla.kontio@gov.de',
    'veikko.rantanen@gmail.com',
    'juhaleskinen@pieksämail.net',
    'martti.kuninkaala@gmail.com',
    'elkku.lohja@gmail.com'
]

const imageFiles = ['tutor1.jpeg', 'tutor2.jpeg', 'tutor3.jpeg'];

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    mail = mails[randomIndex];

    return names[randomIndex] + " - " + mail;
}



function updatePage() {
    const textStuff = getRandomName();
    document.getElementById('name').textContent = textStuff;
}

updatePage();
