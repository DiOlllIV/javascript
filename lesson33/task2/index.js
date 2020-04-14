const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export const getTasksList = () =>
fetch(baseUrl)
.then(response =>
    response.json());

export const getTaskById = (id) =>
fetch(`https://api.github.com/users/${id}`)
.then(response =>
    response.json());

/* примеры использования */
getTasksList().then(tasksList => {
    console.log(tasksList); // [{"id":"1", "done":false ... }, {"id":"2", "done":true ... }, ...]
});

getTaskById('2').then(taskData => {
    console.log(taskData); // {"id":"1", "done":false ... }
});