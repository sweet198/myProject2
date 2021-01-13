const sizes = () => {
    const sizesBlocks = document.querySelectorAll('.sizes-block');


    sizesBlocks.forEach((block, index) => {
       block.addEventListener('mouseenter', () => {
           console.dir(block.children);
           block.children.forEach(child => {
               if (child.tagName == 'P' && child.className !== 'sizes-hit') {
                   child.style.display = 'none';
               }

               if (child.tagName == 'IMG') {
                   child.src = `assets/img/sizes-${index + 1}-1.png`
               }
           })
       })

        block.addEventListener('mouseleave', () => {
            console.dir(block.children);
            block.children.forEach(child => {
                if (child.tagName == 'P') {
                    child.style.display = 'block';
                }

                if (child.tagName == 'IMG') {
                    child.src = `assets/img/sizes-${index + 1}.png`
                }
            })
        })
    });

}

export default sizes;