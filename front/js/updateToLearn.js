const toLearnStatus = document.querySelector('.toLearn__status');
const toLearnTimeLimit = document.querySelector('.toLearn__timelimit');

toLearnStatus.addEventListener('click', async () => {
    const url = new URL(window.location.href);
    const toLearnID = url.searchParams.get('id');
    const status = await fetch(`http://localhost:3000/to-learns/${toLearnID}`).then(response => response.json()).then(data => data.status);

    let newStatus;
    switch(status) {
        case 'to start':
            newStatus = 'started';
            break;
        case 'started':
            newStatus = 'finished';
            break;
        case 'finished':
            newStatus = 'to start';
            break;
    }

    fetch(`http://localhost:3000/to-learns/${toLearnID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({status: newStatus})
    })
    .then(response => response.json())
    .then(data => {
        // Conversion du status en emoji
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
        toLearnStatus.textContent = data.status;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

toLearnTimeLimit.addEventListener('change', () => {
    const url = new URL(window.location.href);
    const toLearnID = url.searchParams.get('id');
    const timelimit = toLearnTimeLimit.value;

    fetch(`http://localhost:3000/to-learns/${toLearnID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({timelimit})
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });
});