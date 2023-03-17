let username = 'BackendAdmin'
let password = 'Kryptonig123'


const adminUSer = document.getElementById('user')
const adminPass =  document.getElementById('pass')
const form = document.getElementById('form')
const small = document.getElementById('small')

form.addEventListener('submit', SubmitForm )

function SubmitForm(e){

    e.preventDefault()

    if(adminUSer.value == username && adminPass.value == password ){
        window.location.href = 'admin.html'
        small.classList.add('success')
    } 
    else{
        alert('wrong details')
        small.innerHTML ='Wrong Details'
        small.classList.add('wrong')
    }
}