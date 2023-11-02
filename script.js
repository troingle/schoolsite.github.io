function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {

    const color = getRandomColor;

    document.body.style.backgroundColor = color;
  }

setInterval(changeBackgroundColor, 3000);

