//chat menu
const chatMenu = document.querySelector('.chat-menu')
const chatOpts = document.querySelector('.chat-opts')

chatMenu && chatMenu.addEventListener('click', () => {
    chatOpts.classList.toggle('active')
    chatMenu.classList.toggle('fa-times')
    chatMenu.classList.toggle('fa-ellipsis-v')
})

//mes menu
const mesMenus = document.querySelectorAll('.mes-menu')
mesMenus.forEach(mesMenu => {
    mesMenu.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('active')
    })
})

//header menu
const headerMenu = document.querySelector('.menu')
const headerBars = document.querySelector('.menu a i')
const headerLists = document.querySelectorAll('.header-right-lists li')
headerMenu.addEventListener('click', () => {
    headerBars.classList.toggle('fa-times')
    headerBars.classList.toggle('fa-bars')
    headerLists.forEach(headerList => headerList.classList.toggle('active'))
})