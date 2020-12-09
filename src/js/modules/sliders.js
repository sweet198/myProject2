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

    function showNextSlide(removeAnimateClass, addAnimateClass) {
        items[slideIndex -1].classList.remove(removeAnimateClass);
        items[slideIndex -1].classList.add(addAnimateClass);
    }

    // check availability of the buttons
    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            showNextSlide('slideInRight', 'slideInLeft');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            showNextSlide('slideInLeft', 'slideInRight');
        });
    } catch (e) {

    }

    function activateAnimation() {
        if (dir === 'vertical') {
            isPaused = setInterval(() => {
                plusSlides(1);
                items[slideIndex -1].classList.add('slideInDown');
                // items[slideIndex -1].classList.remove('slideInUp');
            }, time);
        } else {
            isPaused = setInterval(() => {
                plusSlides(1);
                showNextSlide('slideInLeft', 'slideInRight');
            }, time);
        }
    }

    slider.addEventListener('mouseenter', () => {
        clearInterval(isPaused)
    });

    slider.addEventListener('mouseleave', () => {
        activateAnimation();
    });
}

export default sliders;