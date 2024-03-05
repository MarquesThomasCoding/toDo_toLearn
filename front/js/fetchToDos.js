fetch('http://localhost:3000/to-dos')
.then(response => response.json())
.then(data => {
    const todosList = document.querySelector('.todos__list');
    data.forEach(todo => {
        // Conversion de la timelimit au format 'x jours avant la date limite'
        if(todo.timelimit) {
            const date = new Date(todo.timelimit);
            const now = new Date();
            const diff = date - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            todo.timelimit = `${days} days left`;
        }

        // Conversion du status en emoji
        switch(todo.status) {
            case 'to start':
                todo.status = '🔴';
                break;
            case 'started':
                todo.status = '🟠';
                break;
            case 'finished':
                todo.status = '🟢';
                break;
        }

        const div = document.createElement('div');
        div.innerHTML = `
            <h2 class='toDo__title'>${todo.title}</h2>
            <p class='toDo__status'>${todo.status}</p>
        `;
        if(todo.timelimit) {
            div.innerHTML += `<p class='toDo__timelimit'>${todo.timelimit}</p>`;
        }
        div.classList.add('todos__list__item');
        div.addEventListener('click', () => {
            window.location.href = `../html/todo.html?id=${todo.id}`;
        });
        todosList.appendChild(div);
    });
})
.catch(error => {
    console.error('Error:', error);
});