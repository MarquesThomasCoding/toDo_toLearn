// Récupération de l'ID via l'url
const url = new URL(window.location.href);
const toLearnID = url.searchParams.get('id');

fetch(`http://localhost:3000/to-learns/${toLearnID}`)
.then(response => response.json())
.then(data => {
    if(data.timelimit) {
        const date = new Date(data.timelimit);
        const day = date.getDate() < 9 ? `0${date.getDate() + 1}` : date.getDate();
        const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const year = date.getFullYear();
        data.timelimit = `${year}-${month}-${day}`;
    }

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

    const toLearnTitle = document.querySelector('h1.toLearn__title');
    const toLearnStatus = document.querySelector('p.toLearn__status');
    const toLearnTimeLimit = document.querySelector('input.toLearn__timelimit');

    toLearnTitle.textContent = data.title;
    toLearnStatus.textContent = data.status;
    toLearnTimeLimit.value = data.timelimit;

})
.catch(error => {
    console.error('Error:', error);
});