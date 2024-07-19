document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    if (taskInput.value.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => li.classList.toggle('completed'));

    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
});
