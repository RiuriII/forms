const btnOverlay = document.querySelector('.btn-overlay');
const btnForm = document.querySelectorAll('.btn-submit');

function changeForm() {
    const container = document.querySelector('.sass-form .container');
    container.classList.toggle('active')
}

function emailValidation(email) {
    const emailRegexp = new RegExp(/\S+@\S+\.\S+/);
    return emailRegexp.test(email)
    
} 

function passwordValidation(password) {
    const passwordRegexp = new RegExp(/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,16}$/)
    return passwordRegexp.test(password)
}

function addParentElementClass(element, add) {
    if(add) {
        element.parentNode.classList.remove('error')
        element.parentNode.classList.add('success')
    } else {
        element.parentNode.classList.add('error')
        element.parentNode.classList.remove('success')
    }
}

function formValidation(event) {
    event.preventDefault()
    const currentForm = event.target.parentNode.classList.value
    
    const currentFormInputs = document.querySelectorAll(`.${currentForm} input`)
        .forEach(input => {
            const inputType = input.getAttribute('type')

            if (inputType =='email') {
                addParentElementClass(input, emailValidation(input.value))
            }
            else if (inputType == 'password') {
                addParentElementClass(input, passwordValidation(input.value))
            } 
            else if(inputType == 'text'){
                addParentElementClass(input, !input.value.length <= 0)
            }
        })
        
}

btnForm.forEach(btn => btn.addEventListener('click', formValidation))

btnOverlay.addEventListener('click', changeForm)