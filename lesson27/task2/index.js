const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = (e) => {
    const isBtn = e.target.classList.contains('counter__button');

    if (!isBtn) {
        return;
    }

    const action = e.target.dataset.action;

    const oldValue = Number(counterValueElem.textContent);

    const newValue = action === 'decrease' ?
        oldValue - 1 : oldValue + 1;

    localStorage.setItem('counterValue', newValue);

    counterValueElem.textContent = newValue;
};
counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
    counterValueElem.textContent = e.newValue;
};

const onDocumentLoaded = () => {
    counterValueElem.textContent = localStorage.getItem('countreValue') || 0;
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);