let inputEmail = document.getElementById("email");
let buttonSubmit = document.getElementById("buttonSubmit");

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  validateEmail(inputEmail.value);
});

function validateEmail(email) {
  let regularPhrase =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regularPhrase.test(email) == true) {

    inputEmail.style.border = '2px solid rgb(79, 125, 243)';
    error.style.visibility = 'hidden';
    inputEmail.value = '';

  } else {

    inputEmail.style.border = '1px solid Red';
    error.style.visibility = 'visible';

  }
}
