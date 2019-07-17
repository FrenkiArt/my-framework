export {beforeAfterHorizontal, beforeAfterVertical}


function beforeAfterHorizontal(targetElement) {
    const beforeAfter = targetElement;
    const innerImgWrap = beforeAfter.querySelector('.before');
    const drag = beforeAfter.querySelector('.before .drag');
    const innerImg = beforeAfter.querySelector('.before img');
    let posX = 0;


    let beforeAfterWidth = beforeAfter.clientWidth;
    innerImg.style.width = beforeAfterWidth + 'px';
    innerImgWrap.style.maxWidth = beforeAfter.clientWidth + 1 + 'px';
    innerImgWrap.style.minWidth = drag.clientWidth - 1 + 'px';

    drag.addEventListener('mousedown', startResizeBeforeHandler);

    function startResizeBeforeHandler(e) {
        beforeAfter.addEventListener('mousemove', resizeBeforeHandler);
        document.addEventListener('mouseup', finishResizeBeforeHandler);
    }

    function finishResizeBeforeHandler() {
        beforeAfter.removeEventListener('mousemove', resizeBeforeHandler);
        document.removeEventListener('mouseup', finishResizeBeforeHandler);
        posX = 0;
    }

    function resizeBeforeHandler(e) {

        if (posX == 0) {
            posX = e.x;
        }

        let drift = e.x - posX;

        if (innerImgWrap.clientWidth <= beforeAfter.clientWidth && innerImgWrap.clientWidth >= drag.clientWidth) {
            innerImgWrap.style.width = (innerImgWrap.clientWidth + drift) + 'px';
            posX = e.x;
        } else if (innerImgWrap.clientWidth > beforeAfter.clientWidth) {
            innerImgWrap.style.width = beforeAfter.clientWidth + 'px';
            //finishResizeBeforeHandler();
        } else if (innerImgWrap.clientWidth < drag.clientWidth) {
            innerImgWrap.style.width = drag.clientWidth + 'px';
            //finishResizeBeforeHandler();
        }
    }
}

function beforeAfterVertical(targetElement) {
    const beforeAfter = targetElement;
    const innerImgWrap = beforeAfter.querySelector('.before');
    const drag = beforeAfter.querySelector('.before .drag');
    const innerImg = beforeAfter.querySelector('.before img');
    let posY = 0;


    let beforeAfterHeight = beforeAfter.clientHeight;
    innerImg.style.height = beforeAfterHeight + 'px';
    innerImgWrap.style.maxHeight = beforeAfter.clientHeight + 1 + 'px';
    innerImgWrap.style.minHeight = drag.clientHeight - 1 + 'px';

    drag.addEventListener('mousedown', startResizeBeforeHandler);

    function startResizeBeforeHandler(e) {
        beforeAfter.addEventListener('mousemove', resizeBeforeHandler);
        document.addEventListener('mouseup', finishResizeBeforeHandler);
    }

    function finishResizeBeforeHandler() {
        beforeAfter.removeEventListener('mousemove', resizeBeforeHandler);
        document.removeEventListener('mouseup', finishResizeBeforeHandler);
        posY = 0;
    }

    function resizeBeforeHandler(e) {

        if (posY == 0) {
            posY = e.y;
        }

        let drift = e.y - posY;

        if (innerImgWrap.clientHeight <= beforeAfter.clientHeight && innerImgWrap.clientHeight >= drag.clientHeight) {
            innerImgWrap.style.height = (innerImgWrap.clientHeight + drift) + 'px';
            posY = e.y;
        } else if (innerImgWrap.clientHeight > beforeAfter.clientHeight) {
            innerImgWrap.style.height = beforeAfter.clientHeight + 'px';
            //finishResizeBeforeHandler();
        } else if (innerImgWrap.clientHeight < drag.clientHeight) {
            innerImgWrap.style.height = drag.clientHeight + 'px';
            //finishResizeBeforeHandler();
        }
    }
}