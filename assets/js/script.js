const formTask = document.querySelector('.form-task');
const taskList = document.querySelector('.task-list')
const deletButton = document.querySelector('.delete-button');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
DisplayTask();

formTask.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputValue = event.target[0].value.trim();
  if (inputValue) {
    tasks.push(inputValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    event.target[0].value = '';
    DisplayTask();
  }

});

function DisplayTask(task) {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const newTask = document.createElement('li');
    newTask.textContent = `${task}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checked');
    checkbox.style.marginLeft = '10px';

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        newTask.classList.add('task-checked');
      } else {
        newTask.classList.remove('task-checked');
      }
    })

    const deletButton = document.createElement('button');
    deletButton.classList.add('task-delete');
    deletButton.textContent = 'X';
    deletButton.style.marginLeft = '10px';

    deletButton.addEventListener('click', () => {
      deleteTask(index);
    });

    newTask.appendChild(checkbox);
    newTask.appendChild(deletButton);
    taskList.appendChild(newTask);
  });


}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  DisplayTask();
}
