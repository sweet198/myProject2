const accordion = (headingSelector, blockSelector) => {
    const headings = document.querySelectorAll('.accordion-heading');
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
    });
}

export default accordion;