const handleChangeSlider = (event) => {
  const images = document.querySelectorAll('.main-block__img')
  let activeImage = null
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('active')) {
      activeImage = i
    }
  }

  images[activeImage].classList.remove('active_show') // Удаляем с прошлой картинки непрозрачность

  setTimeout(() => { // оборачиваем в таймер 0.5s
    images[activeImage].classList.remove('active') // Удаляем прошлую картинку

    if(activeImage === 0 && event.target.className === 'left_arrow'){
      images[images.length - 1].classList.add('active') // отображаем картинку
      setTimeout(() => { // делаем таймер для плавного появления картинки
        images[images.length - 1].classList.add('active_show') // удаляем прозрачность
      },500)
      return
    }

    if (activeImage === (images.length -1) && event.target.className === 'right_arrow'){
      images[0].classList.add('active')
      setTimeout(() => {
        images[0].classList.add('active_show')
      },500)
      return
    }

    if (event.target.className === 'left_arrow') {
      images[activeImage - 1].classList.add('active')
      setTimeout(() => {
        images[activeImage - 1].classList.add('active_show')
      }, 500)

    } else {
      images[activeImage + 1].classList.add('active')
      setTimeout(() => {
        images[activeImage + 1].classList.add('active_show')
      }, 500)
    }
  }, 500)
}

const leftArrow = document.querySelector(".left_arrow")
const rightArrow = document.querySelector(".right_arrow")

leftArrow.addEventListener('click', (e) => handleChangeSlider(e))
rightArrow.addEventListener('click', (e) => handleChangeSlider(e)) 