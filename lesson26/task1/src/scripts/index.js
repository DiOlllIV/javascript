import { tasks } from './storage.js';
import { renderListItems } from './tasksList.js';
import { createEvent } from './attachBtn.js';
import { confirmItem } from './confirmEvent.js';


document.addEventListener('DOMContentLoaded', () => {
    renderListItems(tasks);
});