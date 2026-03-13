// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          alert("Registration successful! (Demo)");
          form.reset();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });

  // Password match validation
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");

  function validatePassword() {
    if (password.value != confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords don't match");
    } else {
      confirmPassword.setCustomValidity("");
    }
  }

  password.onchange = validatePassword;
  confirmPassword.onkeyup = validatePassword;
})();
