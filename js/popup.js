export function myPopup(trigers) {
    /**
     * @param myPopup(trigers) Запускаем наши попапы
     * @param trigers - это тригеры которые будут вызывать появление попапа.
     * Внутри trigers должны быть: 
     * @param [data-popup] data атрибут внутри которого прописан селектор, по которому будет найден и запущен попап.
     */
    const allPopup = document.querySelectorAll('.popup');

    let popup_trigers = trigers;

    document.addEventListener('click', listenDomClick);

    popup_trigers.forEach(element => {
        element.addEventListener('click', popupTrigerHandler);
    });

    allPopup.forEach(element => {
        element.style.display = 'block';
        if (element.querySelector('.popup__btn__close') != null) {
            element.querySelector('.popup__btn__close').addEventListener('click', closeThisPopup);
        }
        if (element.querySelector('.popup__footer__btn__ok') != null) {
            element.querySelector('.popup__footer__btn__ok').addEventListener('click', closeThisPopup);
        }
    });

    document.querySelector('.overlay').addEventListener('click', clickOnOverlay);

    function popupTrigerHandler(e) {
        e.preventDefault();
        let searchPopup = this.dataset.popup;
        let targetPopup = document.querySelector(searchPopup);
        targetPopup.classList.add('popup_open');
        showOverlay();
        if (targetPopup.clientHeight > window.innerHeight) {
            targetPopup.classList.add('popup-long');
        }
    }

    function closeThisPopup(e) {
        e.target.closest('.popup').classList.remove('popup_open');
        hideOverlay();
    }

    function closeAllPopup() {
        allPopup.forEach(element => {
            element.classList.remove('popup_open');
        });
        hideOverlay();
    }

    function listenDomClick(e) {
        console.log('click e.target is ', e.target);
    }

    function showOverlay() {
        document.querySelector('.overlay').classList.add('popup_open');
        freezeBody();
    }

    function hideOverlay() {
        document.querySelector('.overlay').classList.remove('popup_open');
        unFreezeBody();
    }

    function clickOnOverlay(e) {
        closeAllPopup();
    }

    function freezeBody() {
        document.body.classList.add('popup_open');
    }

    function unFreezeBody() {
        document.body.classList.remove('popup_open');
    }
}