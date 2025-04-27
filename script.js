// event handling
const clickbtn = document.getElementById('clickbtn');
const hoverbtn = document.getElementById('hoverBtn');
const keypressinput = document.getElementById('keypressinput');
const secretarea = document.getElementById('secretarea');

clickbtn.addEventListener('click', () => {
    alert('Button clicked');
});

hoverbtn.addEventListener('mouseover', () => {
    hoverbtn.textContent = 'You hovered';
});

keypressinput.addEventListener('keypress', (e) => {
    console.log('Key pressed: ${e.key}');
});

secretarea.addEventListener('dblclick', () => {
    secretarea.style.backgroundColor = '#ffd700';
    alert('Secret double click revealed');
});

// interactive elements
const changebtn = document.getElementById('changebtn');
changebtn.addEventListener('click', () => {
    changebtn.textContent = "I'm changed!";
    changebtn.style.backgroundColor = '#ff69b4';
});

const tabbtns = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab-content');

tabbtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// slide show logic
const images = ['images/1.webp', 'images/2.webp', 'images/3.webp', 'images/4.jpg', 'images/5.webp', 'images/6.jpg'];
let index = 0;
const imager = document.getElementById('slideimage');

setInterval(() => {
    index = (index + 1) % images.length;
    slideimage.src = images[index];
}, 2000); // change image every 2 seconds

// form validation
const form = document.getElementById('myform');
const email = document.getElementById('email');
const password = document.getElementById('password');
const formmessage = document.getElementById('formmessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!email.value.includes('@')) {
        formmessage.textContent = 'Please enter a valid email';
        formmessage.style.color = 'red';
        return;
    }

    if(password.value.length < 8) {
        formmessage.textContent = 'Password must be atleast 8 characters!';
        formmessage.style.color = 'red';
        return;
    }

    formmessage.textContent = 'Form submitted successfully';
    formmessage.style.color = 'green';
});