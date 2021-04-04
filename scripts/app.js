//chat menu
const chatMenu = document.querySelector('.chat-menu')
const chatOpts = document.querySelector('.chat-opts')

chatMenu?.addEventListener('click', () => {
    chatOpts.classList.toggle('active')
    chatMenu.classList.toggle('fa-times')
    chatMenu.classList.toggle('fa-ellipsis-v')
})

//mes menu
const mesMenus = document.querySelectorAll('.mes-menu')
mesMenus?.forEach(mesMenu => {
    mesMenu.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('active')
    })
})

//mes exercise table
const mesExerciseEllipsis = document.querySelectorAll('.mes-exercise-ellipsis')
mesExerciseEllipsis?.forEach(mesExercise => {
    mesExercise.addEventListener('click', function () {
        this.lastElementChild.lastElementChild.classList.toggle('active')
    })
})

//input toggle
const inputSwitch = document.querySelector('.input-switch')

inputSwitch?.addEventListener('click', () => {
    inputSwitch.classList.toggle('active')
})

//Mes exercise input increment decrement
const numberInputs = document.querySelectorAll('.number')
const increments = document.querySelectorAll('.increment')
const decrements = document.querySelectorAll('.decrement')

increments?.forEach(increment => {
    increment.addEventListener('click', function () {
        this.nextElementSibling.lastElementChild.stepUp(1)
    })
})
decrements?.forEach(decrement => {
    decrement.addEventListener('click', function () {
        this.previousElementSibling.lastElementChild.stepDown(1)
    })
})