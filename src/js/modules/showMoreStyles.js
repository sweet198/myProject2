import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
/*
    btn.addEventListener('click', () => {
        cards.forEach(card => {
           card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
           card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });

        // btn.style.display = 'none';
        btn.remove();
    });

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    })*/

    btn.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error));
    });

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${item.src} alt="style">
                    <h4>${item.title}</h4>
                    <a href="${item.link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }

// <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
//         <div class=styles-block>
//         <img src=assets/img/styles-5.jpg alt>
//     <h4>Пастелью</h4>
//     <a href="#">Подробнее</a>
//         </div>
//         </div>
};

export default showMoreStyles;