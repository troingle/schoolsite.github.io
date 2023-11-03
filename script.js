document.addEventListener("DOMContentLoaded", function() {
    var randomNum = Math.floor(Math.random() * 9) + 2;
    var randomNumberElement = document.getElementById("randomNumber");

    randomNumberElement.textContent = randomNum;
});
