// Найти кнопки, на которые будем кликать

// Навесить на кнопки события клика
// Добавить в обработчик события клика функцию, которая бы проверяла, открыт ли текст рядо, если открыт, то скрывать его, если закрыт, то открывать


// TODO: код писать ниже

function dropdown(event){
  //console.log(event)
  event.target.style.display = 'none'
  const searchableClass = event.target.className === 'show' ? 'hide' : 'show'
  const siblingElement = event.target.parentElement.querySelector('.' + searchableClass)
  siblingElement.style.display = 'inline'
  const text = event.target.parentElement.parentElement.querySelector('.main-block__text')

  if(event.target.className === 'show'){
    text.style.display = 'inline'
  } else {
    text.style.display = 'none'
  }
}

function log(event){
  console.log(event)
}


// Второй способ навешивания событий
const showFirstLink = document.querySelector('.show')
const hideFirstLink = document.querySelector('.hide')

showFirstLink.onclick = dropdown
hideFirstLink.onclick = dropdown
//showFirstLink.onclick = log
//hideFirstLink.onclick = log

// Третий способ
const showThirdLink = document.querySelectorAll('.show')[2]
const hideThirdLink = document.querySelectorAll('.hide')[2]

showThirdLink.addEventListener('click', dropdown)
hideThirdLink.addEventListener('click', dropdown)
showThirdLink.addEventListener('click', log)
hideThirdLink.addEventListener('click', log)

