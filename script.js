const inputControls = document.querySelectorAll('.input-control');

for (let i = 0; i < inputControls.length; i++) {
    let input = inputControls[i].querySelector('input');
    input.addEventListener('blur', function(event) {
        event.preventDefault();
        !input.value
        ? inputControls[i].classList.add('error')
        : inputControls[i].classList.remove('error')
    })
}

const passwordField = document.getElementById('password-field');
const passwordBtn = document.getElementById('toggle-password');

const togglePassword = () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordBtn.innerHTML = 'visibility';
    } else {
        passwordField.type = 'password';
        passwordBtn.innerHTML = 'visibility_off';
    }
}

passwordBtn.addEventListener('click', togglePassword);

const textarea = document.getElementById('textarea-field');
const characterCounter = document.getElementById('character-counter');

const countCharacters = () => {
    let characters = textarea.value.length;
    let count = characters;
    characterCounter.textContent = `${count} / 1000`;
}

textarea.addEventListener('input', countCharacters);