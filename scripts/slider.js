const handleChangeSlider = (event) => {
  const images = document.querySelectorAll('.main-block__img')
  let activeImage = null
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('active')) {
      activeImage = i
    }
  }
  images[activeImage].classList.remove('active')
/*Тут или у нас первая картинка и мы нажимаем на левую стрелочку, или у нас последняя картинка и мы нажимаем на правую стрелочку*/
  if(activeImage === 0 && event.target.className === 'left_arrow'){
    images[images.length - 1].classList.add('active')
    return
  } 

  if (activeImage === (images.length -1) && event.target.className === 'right_arrow'){
    images[0].classList.add('active')
    return
  }
  
  if (event.target.className === 'left_arrow') {
    images[activeImage - 1].classList.add('active')
  } else {
    images[activeImage + 1].classList.add('active')
  }
}

const leftArrow = document.querySelector(".left_arrow")
const rightArrow = document.querySelector(".right_arrow")

leftArrow.addEventListener('click', (e) => handleChangeSlider(e))
rightArrow.addEventListener('click', (e) => handleChangeSlider(e))