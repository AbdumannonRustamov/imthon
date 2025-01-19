const signUpButton = document.querySelector('.btn2');
signUpButton.addEventListener('click', (eventDef) => {
    eventDef.preventDefault();
    
    const email = document.querySelector('#signupForm');
    const password = document.querySelector('#signupForm');
    const confirmPassword = document.querySelector('#signupForm');
    
    if (password === confirmPassword) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        
        window.location.href = 'home.html';
    }
});

const loginButton = document.querySelector('.btn1');
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const loginEmail = document.querySelector('#loginForm');
    const loginPassword = document.querySelector('#loginForm');
    
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        window.location.href = 'home.html'; 
        } 
});

const toggle = document.querySelector('#toggle');
toggle.addEventListener('change', () => {
    const form1 = document.querySelector('.form1');
    const form2 = document.querySelector('.form2');
    
    if (toggle.checked) {
        form1.style.display = 'none';
        form2.style.display = 'block';
    } else {
        form1.style.display = 'block';
        form2.style.display = 'none';
    }
});
