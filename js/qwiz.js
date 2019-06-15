export function myQwiz(myQwiz) {
    const qwiz = myQwiz;
    if (qwiz.querySelectorAll('.qwiz__btn__next') != null) {
        const qwizBtnsNext = qwiz.querySelectorAll('.qwiz__btn__next');
        qwizBtnsNext.forEach(qwizBtn => {
            qwizBtn.addEventListener('click', goQwizToNextStep);
        });
    }
    if (qwiz.querySelectorAll('.qwiz__btn__prev') != null) {
        const qwizBtnsPrev = qwiz.querySelectorAll('.qwiz__btn__prev');
        qwizBtnsPrev.forEach(qwizBtn => {
            qwizBtn.addEventListener('click', goQwizToPrevStep);
        });
    }

    const qwizSteps = qwiz.querySelectorAll('.qwiz__step');


    function goQwizToNextStep(e) {
        let qwizStepCurrent = e.target.closest('.qwiz').querySelector('.active_step');
        if (qwizStepCurrent.nextElementSibling != null) {
            let qwizStepNext = qwizStepCurrent.nextElementSibling;
            qwizStepCurrent.classList.remove('active_step');
            qwizStepNext.classList.add('active_step');
        } else {
            console.log('Кончились квизы');
        }
    }

    function goQwizToPrevStep(e) {
        let qwizStepCurrent = e.target.closest('.qwiz').querySelector('.active_step');
        if (qwizStepCurrent.previousElementSibling != null) {
            let qwizStepPrev = qwizStepCurrent.previousElementSibling;
            qwizStepCurrent.classList.remove('active_step');
            qwizStepPrev.classList.add('active_step');
        } else {
            console.log('Вы в самом начале квизов');
        }
    }

    function checkInputMail(){
        
    }
    function checkInputPhone(){

    }
    function checkInputName(){

    }
    function checkInputNumber(){

    }
    function checkStepCurrent(){

    }
}