function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `${taskText} 
                    <span class="move-up">⬆</span>
                    <span class="move-down">⬇</span>
                    <span class="remove">✖</span>`;
                    
    // Toggle highlight on click
    li.addEventListener('click', function(event) {
        if (!event.target.classList.contains('move-up') && !event.target.classList.contains('move-down') && !event.target.classList.contains('remove')) {
            li.classList.toggle('highlight');
        }
    });

    li.querySelector('.remove').addEventListener('click', function(event) {
        // event.stopPropagation();
        taskList.removeChild(li);
    });

    li.querySelector('.move-up').addEventListener('click', function(event) {
        // event.stopPropagation();
        const prevSibling = li.previousElementSibling;
        if (prevSibling) {
            taskList.insertBefore(li, prevSibling);
        }
    });

    li.querySelector('.move-down').addEventListener('click', function(event) {
        // event.stopPropagation();
        const nextSibling = li.nextElementSibling;
        if (nextSibling) {
            taskList.insertBefore(nextSibling, li);
        }
    });

    taskList.appendChild(li);
    taskInput.value = ''; // Clear input field
}

// Add event listener for the Enter key
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(); // Call addTask when Enter is pressed
    }
});
