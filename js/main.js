import {
    myPopup
} from './popup.js';
import {
    smoothScroll
} from './scroll-smooth.js';
import {
    myAccardion
} from './accardion.js';
import { lazyLoading } from './lazy-loading.js';
import { myQwiz } from './qwiz.js';


/* start our popups */
myPopup(document.querySelectorAll('.btn'));
smoothScroll();
myAccardion(document.querySelectorAll('.accardion__title'), document.querySelectorAll('.accardion__content'));
myQwiz(document.querySelector('.qwiz'));






/**
 * Какой-то текст
 * @link https://gist.github.com/gre/1650294
 * @param  {Node} elem The element to get the height of
 * @return {Number}    The element's height in pixels
 * @param {String} type Easing pattern
 * @param {Number} time Time animation should take to complete
 */