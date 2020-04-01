const baseUrl = 'https://crudcrud.com/api/8e1527448f6c49ce90a6ec5e58d8d97f/tasks';

const mapTasks = tasks =>
    tasks.map(({ _id, ...rest }) => ({...rest, id: _id }))

export const getTasksList = () =>
    fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));


export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(taskData)
    });

export const updateTask = (taskId, updatedTaskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(updatedTaskData)
    });

export const deleteTask = (taskId) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });