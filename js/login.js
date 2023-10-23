document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("#Login form");

  loginForm.addEventListener("submit", function (event) {
    if (!validateLoginForm()) {
      event.preventDefault();
    }
  });

  function validateLoginForm() {
    let hasError = false;

    const elements = loginForm.querySelectorAll(".form-outline");
    elements.forEach((element) => {
      element.classList.remove("has-error");
    });

    if (isFieldEmpty("form3Example1c")) {
      hasError = true;
    }

    if (isFieldEmpty("form3Example4c")) {
      hasError = true;
    }

    if (hasError) {
      displayErrorMessage("Please fill in all fields.");
    } else {
      removeErrorMessage();
    }

    return !hasError; 
  }

  function isFieldEmpty(id) {
    const field = loginForm.querySelector(`#${id}`);
    if (field.value === "") {
      field.closest(".form-outline").classList.add("has-error");
      return true;
    }
    return false;
  }

  function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = message;
  }

  function removeErrorMessage() {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = "";
  }
});
