const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles);
    const btn = document.querySelector(trigger);


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
    })
}

export default showMoreStyles;