//функция логирует лого

function logPlatform(event){
    //console.log(document.querySelector("h1.header-block__title"))
    document.querySelector("h1.header-block__title").innerHTML = "NTV"
  }

const platform = document.querySelector('a.header-block__nav-item.first')
platform.addEventListener('click', (event)=>logPlatform(event))

//кнопка Решение логирует весь пункт меню


function logSolutions(event){
//console.log(event.target.parentElement.parentElement.parentElement)
const menu = event.target.parentElement.parentElement.parentElement
menu.style.fontSize = "24px"
}
const solution = document.querySelector("a.header-block__nav-item.second")
//solution.onclick = logSolutions
solution.onclick = (event)=>logSolutions(event)

// Клиенты -> логгирует таргет картинки

function clientsImg(event){
//document.getElementsByTagName("img")[0].setAttribute("src","http://www.gstatic.com/webp/gallery/4.jpg");
const images = document.getElementsByTagName("img")
  for(let i = 0; i < images.length; i++){
    images[i].setAttribute("src","http://www.gstatic.com/webp/gallery/4.jpg")
  }
}

const clientsMenu = document.querySelector('a.header-block__nav-item.third')    
clientsMenu.onclick = (event)=>clientsImg(event)

//Партнеры -> меняет backgroundColor кнопки "Партнеры"

const changeBgColor = (target) => {
  target.style.backgroundColor = "yellow"
}

const partnerBtn = document.querySelector('.header-block__nav-item.forth')
partnerBtn.addEventListener('click', (event) => changeBgColor(event.target))
