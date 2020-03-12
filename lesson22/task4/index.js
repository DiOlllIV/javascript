const task = document.querySelector('.task-status');
const taskStatus = () => console.log(task.checked);

task.addEventListener('change', taskStatus);