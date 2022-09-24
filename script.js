
// checks if the values are equal and then set styles to those elements
function validatePassword(pass, confirm) {
    const password = document.getElementById('password');
    const confirm_pass = document.getElementById('confirm_password')
    const message = document.getElementById('message')
    if (pass != confirm) {
        message.innerHTML = "*wrong password"
        message.setAttribute('style', "color:red; font-size:0.8em;")
        password.setAttribute('style',"border: 1px solid red;")
        confirm_pass.setAttribute('style',"border: 1px solid red;")
    } else if (pass == confirm) {
        password.setAttribute('style',"border:1px solid green;")
        confirm_pass.setAttribute('style',"border:1px solid green;")
        message.innerHTML = ''
    }
}


// takes the data and pass the data to validator 
function checker() {
    const pass = document.getElementById('password');
    const confirm_pass = document.getElementById('confirm_password')
    if (pass.value != confirm_pass.value) {
        validatePassword(pass.value, confirm_pass.value)
    } else if (pass.value == confirm_pass.value) {
        validatePassword(pass.value, confirm_pass.value)
    }
}
