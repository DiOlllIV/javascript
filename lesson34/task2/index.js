const baseUrl = 'https://crudcrud.com/api/8e1527448f6c49ce90a6ec5e58d8d97f/tasks'

const loginForm = document.querySelector('.login-form');
const inputs = [...document.querySelectorAll('input')];
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

reportValidation = () => {
    if (loginForm.reportValidity())
        submitBtn.disabled = false;
    else submitBtn.disabled = true;
};


loginForm.addEventListener('input', reportValidation);

const validationUser = e => {
    e.preventDefault();

    const userValue = [...new FormData(loginForm)]
        .reduce((acc, [key, value]) =>
            ({...acc, [key]: value }), {});

    fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(userValue)
        })
        .then(response => response.json())
        .then(data => {
            inputs.map(elem => elem.value = '');
            submitBtn.disabled = true;
            alert(JSON.stringify(data));
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
        });

}

submitBtn.addEventListener('click', validationUser);