const title = document.querySelector('.title');
const about = document.querySelector('.about');
const plans = document.querySelector('.plans');
const goal = document.querySelector('.goal');

function getTitle() {
    return title.textContent;
};

function getDescription() {
    return about.innerText;
};

function getPlans() {
    return plans.innerHTML;
};

function getGoal() {
    return goal.outerHTML;
};

export { getDescription, getGoal, getPlans, getTitle };