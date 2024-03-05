const deleteBtn = document.querySelector('.btn--delete');

deleteBtn.addEventListener('click', () => {
    const url = new URL(window.location.href);
    const toDoID = url.searchParams.get('id');
    fetch(`http://localhost:3000/to-dos/${toDoID}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = '../html/todos.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});