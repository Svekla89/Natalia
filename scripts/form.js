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
  if((event.target.checked)||(event.target.value)) { //если чек бокс активен
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
  btnSubmit.disabled = true // иначе нет
}
}

const genderBoxArr = document.querySelectorAll('input[name=gender]')//массив из радио кнопок
for(let i=0; i<genderBoxArr.length; i++){
  genderBoxArr[i].addEventListener("change", event => rarioConfirm(event))//присваеваем каждому элементу массива input[name=gender] addEventListener
}



// Сделать ту же самую проверку но уже проверять заполненность всех полей первой формы


const formToGoogle = document.querySelector('#first_form')
formToGoogle.addEventListener('submit', (e) => {
  // const url = "https://script.google.com/macros/s/AKfycbzPEfjfXKUi5ED3k_O3h_LV5AyNIFrgJ__OBeWTDwd94c_3IoM/exec", oData = new FormData(formToGoogle);
  //
  // const oReq = new XMLHttpRequest();
  // oReq.open("GET", url);
  // //oReq.setRequestHeader('Content-Type', 'json')
  // oReq.onload = function(oEvent) {
  //   if (oReq.status == 200) {
  //     console.log("Uploaded!");
  //   } else {
  //     console.log("Error " + oReq.status);
  //   }
  // };
  //
  // oReq.send(oData);
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://script.google.com/macros/s/AKfycbzPEfjfXKUi5ED3k_O3h_LV5AyNIFrgJ__OBeWTDwd94c_3IoM/exec?firstname=firstnameqqq&lastname=lastnamewww");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send();

})
