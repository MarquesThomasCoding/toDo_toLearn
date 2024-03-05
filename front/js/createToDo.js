const inputToDoTitle = document.querySelector('.toDo__title__input');
const toDoDescription = document.querySelector('.toDo__description');
const toDoSkills = document.querySelector('.skills__list');
const inputToDoStatus = document.querySelector('select[name="toDo__status__input"]');
const inputToDoTimeLimit = document.querySelector('input[name="toDo__timelimit__input"]');
const button = document.querySelector('button.btn--validate');

button.addEventListener('click', () => {
    const title = inputToDoTitle.value;
    const description = toDoDescription.value;
    const skills = toDoSkills.querySelectorAll('li.selected');
    let skillsList = [];
    skills.forEach(skill => {
        skillsList.push(skill.querySelector('p').textContent);
    });
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
            skills: skillsList,
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