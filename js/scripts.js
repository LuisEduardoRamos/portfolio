const submitButtonId = document.getElementById("submitButton");
const errorMessage = document.getElementById("submitErrorMessage");

const showError = () => {
  errorMessage.classList.remove("d-none");
};

const clearError = () => {
  errorMessage.classList.add("d-none");
};

submitButtonId.addEventListener("click", async () => {
  submitButtonId.disabled = true;
  const message = document.getElementById("message").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  let error = false;
  [(message, name, email, phone)].forEach((item) => {
    if (item.length < 1) error = true;
  });
  if (error) {
    showError();
    submitButtonId.disabled = false;
  } else {
    clearError();
  }
});
