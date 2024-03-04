fetch('http://localhost:3000/to-learns')
.then(response => response.json())
.then(data => {
    const tolearnsList = document.querySelector('.tolearns__list');
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
            <img class='toLearn__img' src='${tolearn.image}' alt='${tolearn.title}'>
            <p class='toLearn__status'>${tolearn.status}</p>
        `;
        if(tolearn.timelimit) {
            div.innerHTML += `<p class='toLearn__timelimit'>${tolearn.timelimit}</p>`;
        }
        div.classList.add('tolearns__list__item');
        div.addEventListener('click', () => {
            window.location.href = `../html/tolearn.html?id=${tolearn.id}`;
        });
        tolearnsList.appendChild(div);
    });
})
.catch(error => {
    console.error('Error:', error);
});