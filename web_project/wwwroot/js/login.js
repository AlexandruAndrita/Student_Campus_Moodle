class LoginFormController {
    constructor() {
        this.onDataChanged = (field) => {
            if (field === "email") {
                const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!regEmail.test(this.formData.email)) {
                    this.setValidation("email", "The email address must valid.");
                }
                else {
                    this.setValidation("email", "Looks good!");
                }
            }
            if (field === "password") {
                const regPass = new RegExp(/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g);
                if (!regPass.test(this.formData.password) || this.formData.password.length < 8) {
                    this.setValidation("password", "The password must have at least 8 characters, minimum 1 lowercase, 1 uppercase, 1 digit, and 1 special character !@#$%^?><;'\&*().");
                }
                else {
                    this.setValidation("password", "Looks good!");
                }
            }
        };
        this.setValidation = (field, message) => {
            document.getElementById(`${field}-validation`).innerHTML = message;
        };
        for (const field of LoginFormController.fields) {
            this.bindElement(field);
        }
    }
    bindElement(field) {
        document.getElementById(field).addEventListener("input", (event) => {
            this.formData = Object.assign(Object.assign({}, this.formData), { [field]: event.target.value });
            this.onDataChanged(field);
        });
    }
}
LoginFormController.fields = [
    "email",
    "password",
];
;
const loginController = new LoginFormController();
//# sourceMappingURL=login.js.map

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}

function openPopup() {
    document.getElementById('forgotPasswordPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('forgotPasswordPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function sendResetEmail() {
    // cod pt trimiterea emailului pt resetarea parolei
    closePopup();
}