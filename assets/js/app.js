const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


function send() {
    var arr = document.getElementsByClassName('input')
    var username = arr[0].value;
    var number = arr[1].value;
    var attend = arr[4].value;
    if (username === '' || number === '' || attend === '') {
        alert("please fill all fields");
        return;}
    if (usernameValue === '') {
        setError(username, 'The name field is required');
    } else {
        setSuccess(username);
    }

    if (number === '') {
        setError(number, 'The text field is required');
    } else {
        setSuccess(number);
    }

    if (attend === '') {
        setError(attend, 'The attend field is required');
    } else {
        setSuccess(attend);
    }

    

        confirm

    
}

