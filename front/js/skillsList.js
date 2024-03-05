const skills = [
    {
        title: "html5",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg",
    },
    {
        title: "css3",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg",
    },
    {
        title: "sass",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Sass.svg",
    },
    {
        title: "bootstrap",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Bootstrap.svg",    
    },
    {
        title: "tailwindcss",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg",
    },
    {
        title: "javascript",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg",
    },
    {
        title: "nodejs",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg",
    },
    {
        title: 'vuejs',
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VueJS-Dark.svg",
    },
    {
        title: "react",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg",
    },
    {
        title: "express",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ExpressJS-Dark.svg",
    },
    {
        title: "prisma",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Prisma.svg",
    },
    {
        title: "php",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg",
    },
    {
        title: "laravel",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Laravel-Dark.svg",
    },
    {
        title: "symfony",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Symfony-Dark.svg",
    },
    {
        title: "python",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Python-Dark.svg",
    },
    {
        title: "java",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Java-Dark.svg",
    },
    {
        title: "ruby",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Ruby.svg",
    },
    {
        title: "mysql",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg",
    },
    {
        title: "mongodb",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg",
    },
    {
        title: "postgresql",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg",
    },
    {
        title: "git",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg",
    },
    {
        title: "github",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg",
    },
    {
        title: "netlify",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Netlify-Dark.svg",
    },
    {
        title: "vercel",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vercel-Dark.svg",
    },
    {
        title: "figma",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Figma-Dark.svg",
    },
    {
        title: "adobe xd",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/XD.svg",
    },
    {
        title: "photoshop",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Photoshop.svg",
    },
    {
        title: "illustrator",
        img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Illustrator.svg",
    },
]

const skillsList = document.querySelector('ul.skills__list');

skills.forEach(skill => {
    const li = document.createElement('li');
    li.classList.add('skills__list__item');
    
    li.innerHTML = `
        <img class="toLearn__img" src="${skill.img}" />
        <p>${skill.title}</p>
    `;
    skillsList.appendChild(li);
    li.querySelector('img').style.width = '50px';

    li.addEventListener('click', () => {
        if(window.location.href.includes('createtolearn.html')) {
            let ToLearnTitle = document.querySelector('h1.toLearn__title');
            ToLearnTitle.textContent = skill.title;
            skillsList.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
            li.classList.add('selected');
        }
        else {
            li.classList.toggle('selected');
        }
    });
});