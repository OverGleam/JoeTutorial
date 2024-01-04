const gameMaster = {
    firstName: 'Joseph',
    lastName: 'Alforque',
    age: 21,
    gender: 'Male',
    Hey() {
        console.log("Hello its me!");
    }
}
localStorage.setItem('gameMaster', JSON.stringify(gameMaster));

document.querySelector('.js-itsme-button').addEventListener('click', () => {
    alert(localStorage.getItem('gameMaster'));
});

document.querySelector('.js-input-something').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let val = document.querySelector('.js-input-something').value;
        if (val === '') {
            document.querySelector('p').innerText = `Please input some value ${val}`;
        } else {
            document.querySelector('.js-test-button').click();
        }
    }
});

document.querySelector('.js-input-something').addEventListener('input', (event) => {
    document.querySelector('p').innerText = `${event.target.value}`;
});

document.querySelector('.js-test-button').addEventListener('click', () => {
    document.querySelector('p').classList.add('Hello')
    document.querySelector('p').innerText = `${document.querySelector('.input-something').value}`;

    alert(document.querySelector('.input-something').value)
});

/* TEST TEST TEST TEST TEST */

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const headers = document.querySelectorAll(".just-buttons-header");

    headers.forEach(header => {
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            header.style.transform = "translateY(-100%)";
        } else {
            // Scrolling up
            header.style.transform = "translateY(0)";
        }
    });

    lastScrollTop = currentScroll;
});