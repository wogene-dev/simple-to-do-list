// select DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasklist = document.getElementById('tasklist');

// Add event listeners for the Add button
addBtn.addEventListener('click', addTask);

// function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if(taskText === '') {
        alert('Please enter a task');
        return;
    }

    // create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
    <span>${taskText}</span>
    <button class="completeBtn">Complete</button>       
    <button class="deleteBtn">Delete</button>
    
    `;

    // Add task completion functionality

    li.addEventListener('click', function(){
        li.classList.toggle('completed');
    });
    
    // Add task deletion functionality

    li.querySelector('.deleteBtn').addEventListener('click', function(e){
        e.stoppropart();   // prevent toggling 'completd'when deleting
        tasklist.removeChild(li);
    });

    // append the new task to the tasklist
    tasklist.appendChild(li);

    // clear the input field
    taskInput.value = '';
}