import modals from "./modules/modals";
import forms from "./modules/forms";
import sliders from "./modules/sliders";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    forms();
    sliders('.feedback-slider','.feedback-slider-item', '', 5000, '.main-prev-btn', '.main-next-btn' );
    sliders('.main-slider','.main-slider-item', 'vertical', 5000);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
});