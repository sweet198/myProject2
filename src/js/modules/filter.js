const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const items = menu.querySelectorAll('li');
    const btnAll = menu.querySelector('.all');
    const btnLovers = menu.querySelector('.lovers');
    const btnChef = menu.querySelector('.chef');
    const btnGirl = menu.querySelector('.girl');
    const btnGuy = menu.querySelector('.guy');
    const btnGrandmother = menu.querySelector('.grandmother');
    const btnGranddad = menu.querySelector('.granddad');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const markAll = wrapper.querySelectorAll('.all');
    const markLovers = wrapper.querySelectorAll('.lovers');
    const markChef = wrapper.querySelectorAll('.chef');
    const markGirl = wrapper.querySelectorAll('.girl');
    const markGuy = wrapper.querySelectorAll('.guy');
    const no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
           mark.style.display = 'none';
           mark.classList.remove('animated', 'fadeIn');

           no.style.display = 'none';
           no.classList.remove('animated', 'fadeIn');

           if (markType) {
               markType.forEach(mark => {
                   mark.style.display = 'block';
                   mark.classList.add('animated', 'fadeIn');
               });
           } else {
               no.style.display = 'block';
               no.classList.add('animated', 'fadeIn');
           }
        });
    };

    const makeActive = (activeBtn) => {
        items.forEach(item => {
            item.classList.remove('active');
        });
        activeBtn.classList.add('active');
    };


    btnAll.addEventListener('click', () => {
        makeActive(btnAll);
        typeFilter(markAll);
    });

    btnLovers.addEventListener('click', () => {
        makeActive(btnLovers);
        typeFilter(markLovers);
    });

    btnChef.addEventListener('click', () => {
        makeActive(btnChef);
        typeFilter(markChef);
    });

    btnGirl.addEventListener('click', () => {
        makeActive(btnGirl);
        typeFilter(markGirl);
    });

    btnGuy.addEventListener('click', () => {
        makeActive(btnGuy);
        typeFilter(markGuy);
    });

    btnGrandmother.addEventListener('click', () => {
        makeActive(btnGrandmother);
        typeFilter();
    });

    btnGranddad.addEventListener('click', () => {
        makeActive(btnGranddad);
        typeFilter();
    });
}

export default filter;