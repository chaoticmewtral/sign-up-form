const password = document.getElementById('pwd');
const passwordMatch = document.getElementById('pwd-match');
const submit = document.querySelector('button');

 submit.addEventListener('click', () => passwordValidate());

 function passwordValidate() {
    console.log(password.textContent, passwordMatch.textContent);
    const pwdContainer = document.querySelector('label[for="pwd-match"]');
    if (password.textContent === passwordMatch.textContent) {
        return;
    }
    else {
        const errorMsg = createElement('p');
        errorMsg.textContent = "Passwords must match";
        pwdContainer.appendChild(errorMsg);
        pwdContainer.classList.add('error');
    }
 }