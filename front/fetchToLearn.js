fetch('http://localhost:3000/to-learns')
.then(response => response.json())
.then(data => {
    const tolearns = document.querySelector('.tolearns');
    data.forEach(tolearn => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${tolearn.title}</h2>
            <p>${tolearn.timelimit}</p>
            <p>${tolearn.status}</p>
        `;
        tolearns.appendChild(div);
    });
})
.catch(error => {
    console.error('Error:', error);
});