import { tasks } from './storage.js';
import { renderListItems } from './tasksList.js';

const attachBtn = document.querySelector('.create-task-btn');
export const createEvent = () => {
    const input = document.querySelector('.task-input');
    if (!input.value) return false;
    tasks.unshift({ text: input.value, done: false, dateStart: new Date(), dateEnd: undefined });
    input.value = '';

    renderListItems(tasks);
};
attachBtn.addEventListener('click', createEvent);