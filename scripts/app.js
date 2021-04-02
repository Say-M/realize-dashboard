//sidebar
const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar div')
menu.addEventListener('click', function () {
    sidebar.classList.toggle('active')
    menu.classList.toggle('fa-times')
    menu.classList.toggle('fa-bars')
})