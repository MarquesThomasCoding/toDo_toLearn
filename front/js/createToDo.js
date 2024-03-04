const ToDoTitle = document.querySelector('.toDo__title');
const toDoDescription = document.querySelector('.toDo__description');
const inputToDoStatus = document.querySelector('select[name="toDo__status__input"]');
const inputToDoTimeLimit = document.querySelector('input[name="toDo__timelimit__input"]');
const button = document.querySelector('button.btn--validate');

button.addEventListener('click', () => {
    const title = ToDoTitle.value;
    const description = toDoDescription.value;
    const status = inputToDoStatus.value;
    const timelimit = inputToDoTimeLimit.value;

    if(!title) {
        alert('Please choose a project to do!');
        return;
    }
    fetch('http://localhost:3000/to-dos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            description,
            timelimit,
            status
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = '../html/todos.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});