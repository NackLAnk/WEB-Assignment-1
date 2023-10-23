
function isValidEmail(email) {
    return email && email.includes("@") && email.endsWith(".com");
}

function isValidPhone(phone) {
    return phone.length > 7;
}

function isValidPassword(pass) {
    return pass.length > 7;
}

document.addEventListener("DOMContentLoaded", function () {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailField = document.getElementById("emailField");
    const emailAdd = document.getElementById("emailAdd");
    const phoneField = document.getElementById("phoneField");
    const phoneNum = document.getElementById("phoneNumber");
    const passwordField = document.getElementById("passwordField");
    const password = document.getElementById("password");
    const submitButton = document.getElementById("submitButton");

    firstNameInput.addEventListener("input", toggleFieldsVisibility);
    lastNameInput.addEventListener("input", toggleFieldsVisibility);
    emailField.addEventListener("input", toggleFieldsVisibility);
    phoneField.addEventListener("input", toggleFieldsVisibility);

    function toggleFieldsVisibility() {
        const firstNameValue = firstNameInput.value.trim();
        const lastNameValue = lastNameInput.value.trim();
        const emailValue = emailAdd.value;
        const phoneValue = phoneNum.value;
        const passwordValue = password.value;

        if (firstNameValue.length >= 2 && lastNameValue.length >= 2) {
            emailField.style.display = "block";
        } else {
            emailField.style.display = "none";
            phoneField.style.display = "none";
            passwordField.style.display = "none";
        }

        if (isValidEmail(emailValue)) {
            phoneField.style.display = "block";
        } else {
            phoneField.style.display = "none";
            passwordField.style.display = "none";
        }

        if (isValidPhone(phoneValue)) {
            passwordField.style.display = "block";
            if (isValidPassword(passwordValue)) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        } else {
            passwordField.style.display = "none";
        }
    }

    toggleFieldsVisibility();
    toggleFieldsVisibility();

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        submitButton.disabled = true;
        loading.classList.add("active");

        setTimeout(function () {
            submitButton.disabled = false;
            loading.classList.remove("active");
        }, 3000);
    });
});