const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value')

dropdownValue.addEventListener('click', () => {
	dropdownList.classList.toggle('dropdown__list_active');
});

document.querySelectorAll('.dropdown__link').forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		dropdownValue.textContent = link.textContent;
		dropdownList.classList.remove('dropdown__list_active');
	})
});

