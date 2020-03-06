import { tasks } from './storage.js';
import { renderListItems } from './tasksList.js';

const confirmEvent = document.querySelector('.list');
export const confirmItem = event => {
    const confirmItem = tasks.find(item =>
        item.text === event.target.parentNode.textContent);
    confirmItem.done = event.target.checked
    confirmItem.dateEnd = confirmItem.done ? new Date() : undefined;
    renderListItems(tasks);
};
confirmEvent.addEventListener('click', confirmItem);