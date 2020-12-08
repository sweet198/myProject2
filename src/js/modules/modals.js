function modals() {

    const openModal = modal => {
        modal.classList.add('show');
        modal.classList.remove('hide');

        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${calcScroll()}px`;
    }

    const closeAllModals = () => {
        const windows = document.querySelectorAll('[data-modal]');

        windows.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        });
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '0px';
    }

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

    function useModals(modalSelector, triggerSelector, closeSelector) {
        const modal = document.querySelector(modalSelector);
        const triggers = document.querySelectorAll(triggerSelector);
        const closeBtns = document.querySelectorAll(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }
                openModal(modal);
            });
        });

        closeBtns.forEach(closeBtn => {
           closeBtn.addEventListener('click', () => {
               closeAllModals();
           });
        });

        modal.addEventListener('click', e => {
            const target = e.target;
            if (target) {
                closeAllModals();
            }
        })
    }

    useModals('.popup-design' ,'.button-design', '.popup-close');
    useModals('.popup-consultation' ,'.button-consultation', '.popup-close');
}

export default modals;