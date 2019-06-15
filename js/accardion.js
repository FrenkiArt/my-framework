export function myAccardion(titles, contents) {
    /**
     * @param titles {array} Все загаловки аккардиона
     * @param contents {array} Все тела аккардиона
     */
    titles.forEach((title) => {
        title.addEventListener('click', clickOnAccTitle);
    });

    function clickOnAccTitle(e) {
        let indexAccTitleOpen = Object.values(titles).indexOf(this);
        closeOpenedTitle();
        this.classList.add('open');
        contents[indexAccTitleOpen].classList.add('open');
    }

    function closeOpenedTitle() {
        titles.forEach((title) => {
            title.classList.remove('open');
        });
        contents.forEach((content) => {
            content.classList.remove('open');
        });
    }
}