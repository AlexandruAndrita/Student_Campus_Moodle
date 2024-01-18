function toggleLogin() {
    var loginButton = document.querySelector('.loginButton');

    loginButton.textContent = (loginButton.textContent === 'Login') ? 'Log out' : 'Login';

    if (loginButton.textContent === 'Log out') {
        window.location.href = "/Home/Login";
    }
    else {
        window.location.href = "/Home/Logout";
    }
}

function toggleSignup() {
    var signupButton = document.querySelector('.signupButton');

    if (signupButton.textContent === 'Signup') {
        window.location.href = "/Home/Signup";
        signupButton.style.display = 'none';
    }
}