const onChangeUserData = (event, fieldName) => {
  console.log(event)
  const loginField = document.querySelector('input[name=login]')
  // loginField.value = loginField.value + event.data // TODO: BUGS!!
  //loginField.value = event.target.value

  if(fieldName === 'firstname'){
    loginField.value = event.target.value + '_' + document.querySelector('input[name=lastname]').value
  } else {
    loginField.value = document.querySelector('input[name=firstname]').value + '_' + event.target.value
  }
}

const firstName = document.querySelector('input[name=firstname]')
const lastName = document.querySelector('input[name=lastname]')

firstName.addEventListener('input', e => onChangeUserData(e, 'firstname'))
lastName.addEventListener('input', e => onChangeUserData(e, 'lastname'))


