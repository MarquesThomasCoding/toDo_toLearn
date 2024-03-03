fetch('http://localhost:3000/to-learns')
.then(response => response.json())
.then(data => {
    const tolearns = document.querySelector('.tolearns');
    data.forEach(tolearn => {
        // Conversion de la timelimit au format 'dd/mm/yyyy'
        if(tolearn.timelimit) {
            const date = new Date(tolearn.timelimit);
            const day = date.getDate() < 9 ? `0${date.getDate() + 1}` : date.getDate();
            const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
            const year = date.getFullYear();
            tolearn.timelimit = `${day}/${month}/${year}`;
        }
        const div = document.createElement('div');
        div.innerHTML = `
            <h2 class='toLearnName'>${tolearn.title}</h2>
            <p class='toLearnTimelimit'>${tolearn.timelimit}</p>
            <p class='toLearnStatus'>${tolearn.status}</p>
            <a href='../html/toLearn.html?id=${tolearn.id}'>Voir</a>
        `;
        tolearns.appendChild(div);
    });
})
.catch(error => {
    console.error('Error:', error);
});