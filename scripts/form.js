const onChangeUserData = (event, fieldName) => {
  
  const firstnameField = document.querySelector('input[name][0]')
  const lastnameField = document.querySelector('input[name][1]')
  // loginField.value = loginField.value + event.data // TODO: BUGS!!
  //loginField.value = event.target.value

  firstnameField.value = event.target.value
  console.log(firstnameField)

  /*if(fieldName === 'firstname'){


    loginField.value /* то что находится в поле логин = event.target.value + '_' + document.querySelector('input[name=lastname]').value
  } else {
    loginField.value = document.querySelector('input[name=firstname]').value + '_' + event.target.value
  }
  */
}

const firstName = document.querySelector('input[name=firstname]')
const lastName = document.querySelector('input[name=lastname]')

firstName.addEventListener('input', e => onChangeUserData(e, 'firstname'))
lastName.addEventListener('input', e => onChangeUserData(e, 'lastname'))

//если вводишь логин то появляется в имени и фамилии


