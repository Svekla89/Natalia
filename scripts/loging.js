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


//меняем тест кнопки поддержка на текст соседней кнопки

const changeBtnText = (event) =>{
    const currentBtnText = event.target.innerHTML
    const nextBtnText = event.target.parentElement.parentElement.querySelector(".sixth").innerHTML
    event.target.innerHTML = nextBtnText
    event.target.parentElement.parentElement.querySelector(".sixth").innerHTML = currentBtnText
}
const supportBtn = document.querySelector('.header-block__nav-item.fifth')
supportBtn.addEventListener('click', (event) => changeBtnText(event))

//наводим на вакансии и появляется вложенный список меню
//Доработать функционал кнопки Карьера, и если ранее на неё нажимали, то следующим нажатием скрывать блок меню.

const hoverVacantions = (event) =>{

    let displayElement = event.target.parentElement.querySelector("ul")
    if (displayElement.style.display  === "inline"){
        displayElement.style.display  = "none"
    } else{
        displayElement.style.display  = "inline"
    }

}

const vacantions = document.querySelector(".header-block__nav-item.seventh")
vacantions.addEventListener('contextmenu', (event) => hoverVacantions(event))


//3) Навесить на кнопку Вакансия функционал изменения текста, перед картинкой.

const changeBtnCarier = () =>{
    let carierText = document.querySelector("p.main-block__text")
    carierText.innerHTML = "Шел 1812 год...."
}
const btnVacantion = document.querySelector("a.link_one")
btnVacantion.addEventListener('click', changeBtnCarier)