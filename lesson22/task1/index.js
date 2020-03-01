const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removeBtn = document.querySelector('.remove-handlers-btn')
const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
    eventsListElem.innerHTML += `<span style = "color: ${ color }; margin-left: 8px;" >  ${ text } </span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const attachEventsList = () => {
    divElem.addEventListener('click', logGreyDiv, { capture: true });
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
};
const pushToAttach = attachEventsList;
attachBtn.addEventListener('click', pushToAttach);


/* does not work, why? */
const removeEventsList = () => {
    divElem.removeEventListener('click', event => {
        event.stopPropagation();
    });

};
const pushToRemove = removeEventsList;
removeBtn.removeEventListener('click', pushToRemove);

const clearEventsList = () => {
    eventsListElem.innerHTML = '';
};
const pushToClear = clearEventsList;
clearBtn.addEventListener('click', pushToClear);