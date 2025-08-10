document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Setup event listener for page load (already here)
    
    // Step 2: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Step 3: Create the addTask function
    function addTask() {
        // Retrieve and trim task text
        const taskText = taskInput.value.trim();
        
        // Validate input
        if (taskText === "") {
            alert("Please enter a task first!");
            return;
        }
        
        // Step 4: Task creation and removal
        // Create list item
        const listItem = document.createElement('li');
        
        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Add removal functionality
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Add elements to list item
        listItem.appendChild(removeButton);
        
        // Add list item to task list
        taskList.appendChild(listItem);
        
        // Clear input field
        taskInput.value = "";
        taskInput.focus();
    }
    
    // Step 5: Attach event listeners
    // Add task when button is clicked
    addButton.addEventListener('click', addTask);
    
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});