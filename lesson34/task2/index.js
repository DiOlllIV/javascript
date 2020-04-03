const baseUrl = 'https://5e870549781e48001676b644.mockapi.io/api/v1/loginForm'

const loginForm = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const reportValidation = () => {
    if (loginForm.reportValidity())
        submitBtn.disabled = false;
    else submitBtn.disabled = true;
};

loginForm.addEventListener('input', reportValidation);

const validationUser = e => {
    e.preventDefault();

    const userValue = [...new FormData(loginForm)]
        .reduce((email, [name, pass]) =>
            ({...email, [name]: pass }), {});

    fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(userValue)
        })
        .then(response => response.json())
        .then(data => {
            inputs.forEach(elem => elem.value = '');
            alert(JSON.stringify(data));
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
        });

}

submitBtn.addEventListener('click', validationUser);