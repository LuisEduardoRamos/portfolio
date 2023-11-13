const submitButtonId = document.getElementById('submitButton');
const errorMessage = document.getElementById('submitErrorMessage');

const getMessageValue = () => {
  const textArea = document.getElementById('message');
  return textArea.value;
};

const showError = () => {
  errorMessage.classList.remove('d-none');
};

const clearError = () => {
  errorMessage.classList.add('d-none');
};

submitButtonId.addEventListener('click', () => {
  const message = getMessageValue();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  let error = false;
  [(message, name, email, phone)].forEach((item) => {
    if (item.length < 1) error = true;
  });
  if (error) {
    showError();
  } else {
    clearError();
    //TODO REQUEST TO LR API
  }
});
