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
        data.timelimit = `${day}/${month}/${year}`;
    }
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class='toLearnName'>${data.title}</h2>
        <p class='toLearnTimelimit'>${data.timelimit}</p>
        <p class='toLearnStatus'>${data.status}</p>
    `;
    document.body.appendChild(div);
})
.catch(error => {
    console.error('Error:', error);
});