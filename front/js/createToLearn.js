const ToLearnTitle = document.querySelector('h1.toLearnTitle');
const inputToLearnStatus = document.querySelector('select[name="inputToLearnStatus"]');
const inputToLearnTimeLimit = document.querySelector('input[name="inputToLearnTimeLimit"]');
const button = document.querySelector('button.btnValidate');

button.addEventListener('click', () => {
    const title = ToLearnTitle.textContent;
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