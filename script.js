function updateBackgroundColor() {
    const pos = window.scrollY;
    const breakpoint = 500; 

    if (pos >= breakpoint) {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = '#CE5A67';
    }
}

window.addEventListener('scroll', updateBackgroundColor);

updateBackgroundColor();
