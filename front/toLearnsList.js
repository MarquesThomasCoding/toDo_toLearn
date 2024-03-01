const toLearns = [
    {
        title: "html5",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg",
    },
    {
        title: "css3",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg",
    },
]

const toLearnsList = document.querySelector('ul.tolearnslist');

toLearns.forEach(toLearn => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${toLearn.img}" />
    `;
    toLearnsList.appendChild(li);
    li.querySelector('img').style.width = '60px';

    li.addEventListener('click', () => {
        let inputToLearnTitle = document.querySelector('input[name="inputToLearnTitle"]');
        inputToLearnTitle.value = toLearn.title;
    });
});