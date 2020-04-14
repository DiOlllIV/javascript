const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

const tasksMap = tasksList =>
tasksList.map(({id, done, ...rest}) => ({id, done, ...rest}));
const taskMap = task => 
[task].map(({id, done, ...rest}) =>
    ({id,done, ...rest}));

 const getTasksList = () =>
    fetch(baseUrl)
    .then(response =>
        response.json())
    .then(tasksList =>
        tasksMap(tasksList));

const getTaskById = (id) =>
    fetch(`${baseUrl}/${id}`)
    .then(response =>
        response.json())
    .then(task => taskMap(task))
    .then(task => task[0])
            

/* примеры использования */
getTasksList().then(tasksList => {
    console.log(tasksList); // [{"id":"1", "done":false ... }, {"id":"2", "done":true ... }, ...]
});

getTaskById('2').then(taskData => {
    console.log(taskData); // {"id":"1", "done":false ... }
});