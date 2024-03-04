fetch('http://localhost:3000/to-dos')
.then(response => response.json())
.then(data => {
    const tolearnsList = document.querySelector('.todos__list');
    data.forEach(tolearn => {
        // Conversion de la timelimit au format 'x jours avant la date limite'
        if(tolearn.timelimit) {
            const date = new Date(tolearn.timelimit);
            const now = new Date();
            const diff = date - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            tolearn.timelimit = `${days} days left`;
        }

        // Conversion du status en emoji
        switch(tolearn.status) {
            case 'to start':
                tolearn.status = '🔴';
                break;
            case 'started':
                tolearn.status = '🟠';
                break;
            case 'finished':
                tolearn.status = '🟢';
                break;
        }

        const div = document.createElement('div');
        div.innerHTML = `
            <h2 class='toDo__title'>${tolearn.title}</h2>
            <p class='toDo__status'>${tolearn.status}</p>
        `;
        if(tolearn.timelimit) {
            div.innerHTML += `<p class='toDo__timelimit'>${tolearn.timelimit}</p>`;
        }
        div.classList.add('todos__list__item');
        div.addEventListener('click', () => {
            window.location.href = `../html/todo.html?id=${tolearn.id}`;
        });
        tolearnsList.appendChild(div);
    });
})
.catch(error => {
    console.error('Error:', error);
});