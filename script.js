document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task first!");
            return;
        }
        
        // Create list item
        const listItem = document.createElement('li');
        
        // Set text content directly to li as instructed
        listItem.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Assign removal functionality
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append remove button to list item
        listItem.appendChild(removeButton);
        
        // Append list item to task list
        taskList.appendChild(listItem);
        
        // Clear input field
        taskInput.value = "";
    }
    
    // Event listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});