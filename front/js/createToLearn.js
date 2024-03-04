const ToLearnTitle = document.querySelector('h1.toLearn__title');
const inputToLearnStatus = document.querySelector('select[name="toLearn__status__input"]');
const inputToLearnTimeLimit = document.querySelector('input[name="toLearn__timelimit__input"]');
const button = document.querySelector('button.btn--validate');

button.addEventListener('click', () => {
    const title = ToLearnTitle.textContent;
    const image = document.querySelector('li.selected > img').src;
    const status = inputToLearnStatus.value;
    const timelimit = inputToLearnTimeLimit.value;

    if(!title) {
        alert('Please choose a skill to learn!');
        return;
    }
    fetch('http://localhost:3000/to-learns', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            image,
            timelimit,
            status
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = '../html/tolearns.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});