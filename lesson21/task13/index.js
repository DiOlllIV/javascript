function getSection(num) {
    const elem = document.querySelector(`span[data-number="${num}"]`);
    const position = elem.closest('div');
    const section = position.getAttribute('data-section');

    return section;
};



export { getSection };