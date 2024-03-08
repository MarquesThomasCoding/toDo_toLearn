const searchBar = document.querySelector('input[name="search"]')

searchBar.addEventListener('keyup', async () => {
    const searchValue = searchBar.value

    if(searchValue.length < 3 && searchValue.length !== 0) {
        return
    }
    const tolearnsList = document.querySelector('.tolearns__list');
    const tolearnsListElements = tolearnsList.querySelectorAll('.tolearns__list__item')
    const todosList = document.querySelector('.todos__list');
    const todosListElements = todosList.querySelectorAll('.todos__list__item')

    tolearnsListElements.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
            element.style.display = 'flex'
        } else {
            element.style.display = 'none'
        }
    })

    todosListElements.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
            element.style.display = 'flex'
        } else {
            element.style.display = 'none'
        }
    })
})