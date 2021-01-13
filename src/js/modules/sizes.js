const sizes = (imgSelector) => {
    const sizesBlocks = document.querySelectorAll(imgSelector);

    const showImg = (block) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    const hideImg = (block) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    sizesBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => showImg(block));
        block.addEventListener('mouseleave', () => hideImg(block));
    });
}

export default sizes;