let nav = 0;

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText =
        `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        const dayString = `${month + 1}/${i - paddingDays}/${year}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;

            daySquare.addEventListener('click', () => openCalendar(dayString));
        } else {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }
}

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

function closeCalendar() {
    backDrop.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null;
    load();
}

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });
}

function openCalendar(dayString) {
    backDrop.style.display = 'block';
    clicked = dayString;
}

initButtons();
load();


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