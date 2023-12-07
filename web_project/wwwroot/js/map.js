function toggleLogin() {
    var loginButton = document.querySelector('.loginButton');
    var welcomeMessage = document.getElementById('welcomeMessage');

    loginButton.textContent = (loginButton.textContent === 'Login') ? 'Log out' : 'Login';

    if (loginButton.textContent === 'Log out') {
        window.location.href = "/Home/Login"
    }
    else {
        window.location.href = "/Home/Logout"
    }
}