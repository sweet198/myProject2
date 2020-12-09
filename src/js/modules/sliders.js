const sliders = (sliderSelector, slides, dir, time, prev, next) => {
    let slideIndex = 1; //starting index of slide
    let isPaused = false; // needs for stop auto animation of slider
    const slider = document.querySelector(sliderSelector);
    const items = document.querySelectorAll(slides);

    slider.style.overflow = 'hidden';

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach( item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    //set starting position
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // check availability of the buttons
    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex -1].classList.remove('slideInLeft');
            items[slideIndex -1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex -1].classList.remove('slideInRight');
            items[slideIndex -1].classList.add('slideInLeft');
        });
    } catch (e) {

    }

    function activateAnimation() {
        if (dir === 'vertical') {
            isPaused = setInterval(() => {
                plusSlides(1);
                items[slideIndex -1].classList.add('slideInDown');
            }, time);
        } else {
            isPaused = setInterval(() => {
                plusSlides(1);
                items[slideIndex -1].classList.remove('slideInRight');
                items[slideIndex -1].classList.add('slideInLeft');
            }, time);
        }
    }

    slider.addEventListener('mouseover', () => {
        clearInterval(isPaused)
    });

    slider.addEventListener('mouseout', () => {
        activateAnimation();
    });
}

export default sliders;