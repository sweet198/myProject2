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

    // first variant from course
    /*const btns = document.querySelectorAll(headingSelector);
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
    });*/
    //second variant from course

    const btns = document.querySelectorAll(headingSelector);

    btns.forEach(btn => {
       btn.addEventListener('click', function () {
           this.classList.toggle('active-style');
           this.nextElementSibling.classList.toggle('active-content');

           if (this.classList.contains('active-style')) {
               this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
           } else {
               this.nextElementSibling.style.maxHeight = '0px';
           }
       });
    });
}

export default accordion;