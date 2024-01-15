let passwordField = document.querySelector('#password');
let confirmField = document.querySelector('#confirmpassword');
let nomatchWarning = document.querySelector('#matchwarning');

nomatchWarning.style.visibility = "hidden";

function checkForMatch(e) {
    console.log(`password: ${passwordField.value} confirm: ${confirmField.value}`);
    if (passwordField.value === confirmField.value) {
        nomatchWarning.style.visibility = "hidden";
        console.log('Passwords match.');
    } else {
        console.log('Passwords do not match.')
        nomatchWarning.style.visibility = "visible";
    };
};

passwordField.addEventListener('change', (e) => checkForMatch(e));
confirmField.addEventListener('change', (e) => checkForMatch(e));