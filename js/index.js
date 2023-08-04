// dark mode
const html = document.querySelector('html')
const check = document.querySelector('label');

check.addEventListener('click', changeTheme);

function changeTheme() {
    html.classList.toggle('dark-mode');
}