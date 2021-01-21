import modals from "./modules/modals";
import forms from "./modules/forms";
import sliders from "./modules/sliders";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import sizes from "./modules/sizes";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals();
    forms();
    sliders('.feedback-slider','.feedback-slider-item', '', 5000, '.main-prev-btn', '.main-next-btn' );
    sliders('.main-slider','.main-slider-item', 'vertical', 5000);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    sizes('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
});