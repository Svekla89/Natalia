const onChangeUserData = (event, fieldName) => {
  console.log(event)
  const loginField = document.querySelector('input[name=login]')
  // loginField.value = loginField.value + event.data // TODO: BUGS!!
  //loginField.value = event.target.value

  loginField.value = event.target.value

  if(fieldName === 'firstname'){
    loginField.value /* то что находится в поле логин*/ = event.target.value + '_' + document.querySelector('input[name=lastname]').value
  } else {
    loginField.value = document.querySelector('input[name=firstname]').value + '_' + event.target.value
  }
}

const firstName = document.querySelector('input[name=firstname]')
const lastName = document.querySelector('input[name=lastname]')

firstName.addEventListener('input', e => onChangeUserData(e, 'firstname'))
lastName.addEventListener('input', e => onChangeUserData(e, 'lastname'))

//если вводишь логин то появляется в имени и фамилии

const onChangeUserName = (event) => {
  const loginText = event.target.value //текст поля ввода
  const firstNameField = document.querySelector('input[name=firstname]')//поле имени
const lastNameField = document.querySelector('input[name=lastname]')// поле фамилии
const splitLoginText = loginText.split("_")//разделяем текст на массив элементов с делитемем "_"
firstNameField.value = splitLoginText[0]//текст поля Имя является первой частью текста Логина
if(splitLoginText[1]){ // проверка на то что вторая часть логина существует
  lastNameField.value = splitLoginText[1] //текст поля Фамилия является второй частью текста Логина
} 
}
const login = document.querySelector('input[name=login]') 
login.addEventListener('input', event => onChangeUserName(event))

///если не нажать на чекбокс то нельзя нажать на кнопку отправить

const onConfirm = (event) =>{ 
  const submitBtn = document.getElementById("confirm") //кнопка отправки
  if(event.target.checked){ //если чек бокс активен
    submitBtn.disabled = false // тогда кнопка отправки активно
  } else{
    submitBtn.disabled = true // иначе нет
  }
}
const submitBox = document.querySelector('input[name=confirm]')
submitBox.addEventListener("change", event => onConfirm(event))

//Сделать проверку на ввод данных radio и если мы нечего не ввели, то дисейблить кнопку отправить первой формы.

const rarioConfirm = (event) =>{
const btnSubmit = document.getElementById("confirm1")//кнопка отправки
if(event.target.checked){ //если чек бокс активен
  btnSubmit.disabled = false // тогда кнопка отправки активно
} else{
  submitBtn.disabled = true // иначе нет
}
}
const genderBox = document.querySelector('input[name=gender]')
genderBox.addEventListener("change", event => rarioConfirm(event))