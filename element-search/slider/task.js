const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const sliders = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');

let index = 0;

function deactivSlider(index) {
	sliders.item(index).classList.remove('slider__item_active');
	dots.item(index).classList.remove('slider__dot_active');
}

function activSlider(index) {
	sliders.item(index).classList.add('slider__item_active');
	dots.item(index).classList.add('slider__dot_active');
}

prev.addEventListener('click', () => {
	deactivSlider(index);
	index = (index === 0) ? Array.from(sliders).length - 1 : index - 1;
	activSlider(index);
})

next.addEventListener('click', () => {
	deactivSlider(index);
	index = (index > Array.from(sliders).length - 2) ? 0 : index + 1;
	activSlider(index);
})

dots.forEach((dot, i) => {
	dot.addEventListener('click', () => {
		deactivSlider(index);
		activSlider(i);
		index = i;
	})
})