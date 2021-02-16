const changePhoneNumber = (event) => {
  const phoneText = event.target.value
  if (phoneText && phoneText[0] === "8") {
    event.target.value = phoneText.replace("8", "+7")
    console.log(event.target.value)
  }
}
//const email = document.querySelector("input[type=email]")
//email.addEventListener("blur", event => changePhoneNumber(event))

const changeEmail = (event) => {
  const emailText = event.target.value
  // if(!emailText.match(/.+@.+\..+/)){ // проверка на валидность регулярного выражения
  //   alert("Невалидная почта")
  // }

  if(!/.+@.+\..+/.test(emailText)){ // проверка на валидность строки
    alert("Невалидная почта")
  }
}

const email = document.querySelector("input[type=email]")
email.addEventListener("blur", event => changeEmail(event))//проверить валидность почты
