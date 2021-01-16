const accordion = (headingSelector, blockSelector) => {
   /* const headings = document.querySelectorAll('.accordion-heading');
    const blocks = document.querySelectorAll('.accordion-block');

    const hideBlocks = () => {
        blocks.forEach(block => {
            block.style.display = 'none';
        })
    }

    hideBlocks();

    headings.forEach((heading, index) => {
        heading.addEventListener('click', e => {

            hideBlocks();
            blocks[index].classList.add('animated', 'fadeIn');
            blocks[index].style.display = 'block';
        });
    });*/

    const btns = document.querySelectorAll(headingSelector);
    const blocks = document.querySelectorAll(blockSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeIn');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
            }
        });
    });
}

export default accordion;