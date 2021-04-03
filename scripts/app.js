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