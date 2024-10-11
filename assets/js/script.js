const formTask = document.querySelector('.form-task');
const taskList = document.querySelector('.task-list')
const deletButton = document.querySelector('.delete-button');
const tasks = [];
formTask.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputValue = event.target[0].value.trim();
  if (inputValue) {
    tasks.push(inputValue);
    event.target[0].value = '';
    DisplayTask();
  }

});

function DisplayTask(task) {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const newTask = document.createElement('li');
    newTask.textContent = `${task}`;

    const deletButton = document.createElement('button');
    deletButton.classList.add('task-delete');
    deletButton.textContent = 'Delete';
    deletButton.style.marginLeft = '10px';

    deletButton.addEventListener('click', () => {
      deleteTask(index);
    });

    newTask.appendChild(deletButton);
    taskList.appendChild(newTask);
  });


}

function deleteTask(index) {
  tasks.splice(index, 1);
  DisplayTask();
}
