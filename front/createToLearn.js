const inputToLearnTitle = document.querySelector('input[name="inputToLearnTitle"]');
        const inputToLearnStatus = document.querySelector('select[name="inputToLearnStatus"]');
        const inputToLearnTimeLimit = document.querySelector('input[name="inputToLearnTimeLimit"]');
        const button = document.querySelector('button');

        button.addEventListener('click', () => {
            const title = inputToLearnTitle.value;
            const status = inputToLearnStatus.value;
            const timelimit = inputToLearnTimeLimit.value;

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
                window.location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });