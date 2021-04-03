//chat menu
const chatMenu = document.querySelector('.chat-menu')
const chatOpts = document.querySelector('.chat-opts')

chatMenu.addEventListener('click', () => {
    chatOpts.classList.toggle('active')
    chatMenu.classList.toggle('fa-times')
    chatMenu.classList.toggle('fa-ellipsis-v')
})