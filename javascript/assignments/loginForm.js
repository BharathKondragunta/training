const validEmail = "2211cs010298@mallareddyuniversity.ac.in";
const validPassword = "password123";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === validEmail && password === validPassword) {
        window.location.href = "https://www.youtube.com"; 
    } else {
        alert('Invalid credentials!');
        window.location.reload();
    }
});