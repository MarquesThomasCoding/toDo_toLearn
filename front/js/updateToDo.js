const toDoStatus = document.querySelector('.toDo__status');

toDoStatus.addEventListener('click', async () => {
    const url = new URL(window.location.href);
    const toDoID = url.searchParams.get('id');
    const status = await fetch(`http://localhost:3000/to-dos/${toDoID}`).then(response => response.json()).then(data => data.status);

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

    fetch(`http://localhost:3000/to-dos/${toDoID}`, {
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
        toDoStatus.textContent = data.status;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});