function modals() {
    let isBtnPressed = false;

    // open modal
    function openModal(modal) {
        modal.classList.add('show');
        modal.classList.remove('hide');

        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${calcScroll()}px`;
    }

    //close modal
    function closeAllModals() {
        const windows = document.querySelectorAll('[data-modal]');

        windows.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        });
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '0px';
    }

    //hide element
    function hideElement(element) {
        element.remove();
    }

    //show modal by time
    function showModalByTime(modalSelector, time) {
        setTimeout(() => {
            const modal = document.querySelector(modalSelector);

            //check whether another modal is open
            if (document.body.classList.contains('modal-open') === false) {
                openModal(modal);

            }
        }, time);
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight); // check support of browser
            if (!isBtnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click(); //
            }
        })
    }


    //calculating the width of the scroll bar
    const calcScroll = () => {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    // the main functionality
    function useModals(modalSelector, triggerSelector, closeSelector, isCloseClickOverlay = true, isHideElement = false) {

        const modal = document.querySelector(modalSelector);
        const triggers = document.querySelectorAll(triggerSelector);
        const closeBtns = document.querySelectorAll(closeSelector);

        modal.classList.add('animated', 'fadeIn'); //added animation for modals

        //opening a modal on click on trigger
        triggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }
                if (isHideElement) {
                    hideElement(trigger);
                }

                isBtnPressed = true;

                openModal(modal);
            });
        });

        //closing a modal on click on close btn
        closeBtns.forEach(closeBtn => {
           closeBtn.addEventListener('click', () => {
               closeAllModals();
           });
        });

        //closing a modal on click on the substrate
        modal.addEventListener('click', e => {
            const target = e.target;
            if (target === modal && isCloseClickOverlay) {
                closeAllModals();
            }
        })
    }

    useModals('.popup-design' ,'.button-design', '.popup-close');
    useModals('.popup-consultation' ,'.button-consultation', '.popup-close');
    useModals('.popup-gift', '.fixed-gift', '.popup-close', true,true);

    showModalByTime('.popup-consultation', 60000);

    openByScroll('.fixed-gift');
}

export default modals;