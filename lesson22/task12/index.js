const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom ftom airport', done: true },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: false },
];
const listElem = document.querySelector('.list');
const renderListItems = listItems => {
    listElem.innerHTML = '';
    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);

            return listItemElem;
        })
    listElem.append(...listItemsElems);
}

const createTask = document.querySelector('.create-task-btn');
const newTask = document.querySelector('.task-input');
const toDoList = document.querySelector('.list');
const createNewTask = () => {
    if (newTask.value === '') 
        return;
    
    const task = document.createElement('li');
    task.classList.add('list__item');
    task.textContent = newTask.value;

    const check = document.createElement('input');

    const objTask = {
        text: task.textContent,
        done: check.checked,
    }
    tasks.unshift(objTask);
    renderListItems(tasks);
    newTask.value = '';
}

const confirmItem = event => {
    const confirmItem = tasks.find(item =>
        item.text === event.target.parentNode.textContent);
    confirmItem.done = event.target.checked;
  
    renderListItems(tasks);
};

toDoList.addEventListener('click', confirmItem);
createTask.addEventListener('click', createNewTask);
renderListItems(tasks);