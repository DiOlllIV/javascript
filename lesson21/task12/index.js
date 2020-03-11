function squaredNumbers() {
    const liArr = document.querySelectorAll('.number');

    for (let elem of liArr) {
        const numInSquare = elem.getAttribute('data-number') * elem.getAttribute('data-number');
        elem.dataset.squaredNumber = numInSquare;
    }
};

export { squaredNumbers };