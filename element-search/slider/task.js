const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const sliders = Array.from(document.querySelectorAll('.slider__item'));
const dots = Array.from(document.querySelectorAll('.slider__dot'));

let index = 0;

let slidersE = sliders.forEach((element) => {
	element.onclick = function () {
		if (element.classList.contains('slider__item_active')) {
			element.classList.remove('slider__item_active');
		} else {
			element.classList.add('slider__item_active');
		}
	}
})

let dotsE = dots.forEach((element) => {
	element.onclick = function () {
		if (element.classList.contains('slider__dot_active')) {
			element.classList.remove('slider__dot_active');
		} else {
			element.classList.add('slider__dot_active');
		}
	}
})



prev.addEventListener('click', () => {
	slidersE
});

next.addEventListener('click', () => {
	slidersE
});



