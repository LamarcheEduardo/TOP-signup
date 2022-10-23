const password = document.getElementById('password-1');
const password2  = document.getElementById('password-2');
const message = document.getElementById('message');


const checkPasswords = () => {
    if(password.value == '') {
        message.innerHTML = ''
    } else if(password.value === password2.value) {
        message.style.color = 'green'
        message.innerHTML = 'Password matches'
    } else {
        message.style.color = 'red';
        message.innerHTML = 'Password does not match'
    }
}

