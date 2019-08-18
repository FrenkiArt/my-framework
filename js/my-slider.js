export function artyworkSlider(my_slider) {
  /* Объявляем переменные */
  const slider = my_slider;
  const wrapper = my_slider.querySelector('.my_slider__wrap_list');
  const slideArray = slider.querySelectorAll('.my_slider__slide');
  const btnLeft = slider.querySelector('.btn_arrow__left');
  const btnRight = slider.querySelector('.btn_arrow__right');
  const pagination = slider.querySelector('.pagination');
  let bulletArray; // = slider.querySelectorAll('.bullets .bullet');
  const bullets = slider.querySelector('.bullets');
  let numberCurrentSlide = 0;
  let activeSlide = slider.querySelector('.my_slider__slide.active');
  let widthSlide = 0;
  let translateLength = 0;
  let positionFirstX;
  let swipeLenghtTranslate;
  let prevSlide;
  let nextSlide;

  /* Стартовые функции */
  createBullets();
  updateSlider();
  startPagination();
  updatePagination();

  /* Стартовые слушатели событий */
  window.addEventListener('resize', updateSlider);
  btnRight.addEventListener('click', slideRight);
  btnLeft.addEventListener('click', slideLeft);
  wrapper.addEventListener('mousedown', ifSwipe);


  function slideLeft() {
    /* Слайд влево */
    if (slideArray[numberCurrentSlide].previousElementSibling != null) {
      numberCurrentSlide--;
      updateActiveSlide();
      updateTranslateLength();
      updateBullets();
      wrapper.style.transform = 'translate(' + translateLength + 'px, 0)';
    } else {
    }
    checkPrevAndNextSlide();
  }

  function slideRight() {
    /* Слайд вправо */
    if (slideArray[numberCurrentSlide].nextElementSibling != null) {
      numberCurrentSlide++;
      updateActiveSlide();
      updateTranslateLength();
      updateBullets();
      wrapper.style.transform = 'translate(' + translateLength + 'px, 0)';
    } else {
    }
    checkPrevAndNextSlide();
  }

  function slideTo(indexNumber) {
    /* Слайд к indexNumber */
    numberCurrentSlide = indexNumber;
    updateActiveSlide();
    updateTranslateLength();
    updateBullets();
    wrapper.style.transform = 'translate(' + translateLength + 'px, 0)';
    checkPrevAndNextSlide();
  }

  function getWidthSlide() {
    /* Получаем ширину слайда, и соответственно на эту ширину и будет слайдится слайдер */
    widthSlide = activeSlide.clientWidth;
  }

  function updateActiveSlide() {
    /* Обновляем Активный слайв на новый, подчищая старый */
    activeSlide.classList.remove('active');
    slideArray[numberCurrentSlide].classList.add('active');
    activeSlide = slider.querySelector('.my_slider__slide.active');
  }

  function updateTranslateLength() {
    /* Обновляем на какую длину надо двигать слайдер при свайпах */
    translateLength = -widthSlide * numberCurrentSlide;
  }

  function updateBullets() {
    /* Обнавляем активный .bullet */
    if (bullets != null) {
      bullets.querySelector('.bullet.active').classList.remove('active');
      bulletArray[numberCurrentSlide].classList.add('active');
    }
  }

  function clickOnBullet(e) {
    /* При клике на любой .bullet слайдим на такой же слайд */
    let indexBullet;
    bulletArray.forEach(function (bullet, i) {
      if (bullet == e.target) {
        indexBullet = i;
      }
    })
    slideTo(indexBullet);
  }

  function updateSlider() {
    /* Обновить ширину для слайдинга и слайдим к активному элементу */
    getWidthSlide();
    slideTo(numberCurrentSlide);
  }

  function ifSwipe(e) {
    /* Если событие не клик а именно свайп, то вызываем цепочку событий */
    positionFirstX = e.clientX;
    wrapper.classList.add('breezy');
    window.addEventListener('mousemove', positionMove);
    window.addEventListener('mouseup', ifSwipeEnd);
  }

  function positionMove(e) {
    /* Высчитываем насколько надо сдвинуть слайды при свайпе */
    swipeLenghtTranslate = positionFirstX - e.clientX;
    wrapper.style.transform = 'translate(' + (translateLength - swipeLenghtTranslate) + 'px, 0)';
  }

  function ifSwipeEnd() {
    /* При окончании свайпа вызываем цепочку событий */
    window.removeEventListener('mousemove', positionMove);
    wrapper.classList.remove('breezy');

    if (swipeLenghtTranslate > (widthSlide / 5)) {
      if ((slideArray[numberCurrentSlide].nextElementSibling) != null) {
        slideRight();
      } else {
        slideTo(numberCurrentSlide);
        console.log('right 0');
      }
    } else if (swipeLenghtTranslate * (-1) > (widthSlide / 5)) {
      if ((slideArray[numberCurrentSlide].previousElementSibling) != null) {
        slideLeft();
      } else {
        slideTo(numberCurrentSlide);
      }

    } else {
      slideTo(numberCurrentSlide);
    }

    window.removeEventListener('mouseup', ifSwipeEnd);
  }

  function checkPrevAndNextSlide() {
    /* Загатовка на будущее, заодно Проверяем существуют ли предыдущий и последующий элементы у активного слайдера */
    prevSlide = activeSlide.previousElementSibling;
    nextSlide = activeSlide.nextElementSibling;
    console.log(prevSlide, nextSlide);
    if (prevSlide != null) {
      btnLeft.removeAttribute('disabled');
    } else {
      btnLeft.setAttribute('disabled', true);
    }
    if (nextSlide != null) {
      btnRight.removeAttribute('disabled');
    } else {
      btnRight.setAttribute('disabled', true);
    }

    updatePagination();
  }

  function createBullets() {
    /* Если существует bullets, то создаём .bullet, столько сколько слайдов */
    if (bullets != null) {
      for (let i = 0; i < slideArray.length; i++) {
        let li = document.createElement('li');
        li.classList.add('bullet');
        if (i == 0) {
          li.classList.add('active');
        }
        bullets.append(li);
      }
      bulletArray = slider.querySelectorAll('.bullets .bullet');
      bulletArray.forEach(function (bullet) {
        bullet.addEventListener('click', clickOnBullet);
      })
    }
  }

  function startPagination() {
    /* Ессли существует pagination то заполняем её */
    if (pagination != null) {
      slider.querySelector('.lastNumberSlide').textContent = slideArray.length;
    }
  }

  function updatePagination() {
    /* Обновляем состояние пагинации */
    if (pagination != null) {
      slider.querySelector('.currentNumberSlide').textContent = numberCurrentSlide + 1;
    }
  }

}