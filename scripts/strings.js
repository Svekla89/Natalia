const changePhoneNumber = (event)=>{
const phoneText = event.target.value
if(phoneText && phoneText[0]=== "8"){
    event.target.value = phoneText.replace("8","+7")
    console.log(event.target.value)
}   
} 
const tel = document.querySelector("input[type=tel]")
tel.addEventListener("blur", event => changePhoneNumber(event))//навесили событие потери фокуса на телефон