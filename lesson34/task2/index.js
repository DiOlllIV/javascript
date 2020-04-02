const baseUrl = 'https://crudcrud.com/api/8e1527448f6c49ce90a6ec5e58d8d97f/tasks'

const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

reportValidation = () => {
    if (loginForm.reportValidity())
        submitBtn.disabled = false;
}
loginForm.addEventListener('input', reportValidation);

const createValidation = userValue =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'apllication/json;charset=utf-8'
        },
        body: JSON.stringify(userValue)
    });

const validationUser = e => {
    e.preventDefault();

    const dataObj = [...new FormData(form)]
        .reduce((acc, [key, value]) =>
            ({...acc, [key]: value }), {});

    createValidation(dataObj)
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data));
            form.reset();
            submitBtn.disabled = true;
        })
        .catch(() => {
            errorField.textContent = 'Failed to create user';
        });
};

submitBtn.addEventListener('submit', validationUser);