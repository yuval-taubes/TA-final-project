let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let messageInput = document.getElementById('message')
let submit = document.getElementById('submit-contact')
let error = document.getElementById('error')

function validateEmail(email) {
    var regex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
    return regex.test(email);
  }
  function validateName(name) {
    var regex = /^[a-z ,.'-]+$/i;
    return regex.test(name);
  }

function validateMessage(message){
    if(message === ""){
        return false;
      } 
      else{
        return true;
      }
}

submit.addEventListener('click', function(){
    console.log(nameInput, emailInput, messageInput)

    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value.trim();

    console.log(name, email, message)



    if(validateEmail(email) && validateMessage(message) && validateName(name)){
        nameInput.value = ""
        emailInput.value = ""
        messageInput.value = ""
    }
    else if(validateName(name) == false){
        error.innerText = "Name is Invalid"
    }
    else if(validateEmail(email) == false){
        error.innerText = 'Email is Invalid'
    }   
    else if(validateMessage(message) == false){
        error.innerText = 'Message is empty'
    }
})