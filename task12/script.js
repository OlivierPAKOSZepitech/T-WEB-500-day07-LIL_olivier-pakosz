const form = document.querySelector('form')
const select = document.querySelector('select')
const ul = document.querySelector('ul')
const input = document.querySelector('input')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value != '') {
        const li = document.createElement('li');
        li.textContent = input.value; 
        li.classList.add(select.value)
        ul.appendChild(li)
    } else {
        return;
    }
})