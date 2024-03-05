// Récupération de l'ID via l'url
const url = new URL(window.location.href);
const toDoID = url.searchParams.get('id');

fetch(`http://localhost:3000/to-dos/${toDoID}`)
.then(response => response.json())
.then(data => {

    switch(data.status) {
        case 'to start':
            data.status = 'To start 🔴';
            break;
        case 'started':
            data.status = 'Started 🟠';
            break;
        case 'finished':
            data.status = 'Finished 🟢';
            break;
    }

    const toDoTitle = document.querySelector('input.toDo__title__input');
    const toDoStatus = document.querySelector('p.toDo__status');

    toDoTitle.value = data.title;
    toDoStatus.textContent = data.status;

})
.catch(error => {
    console.error('Error:', error);
});