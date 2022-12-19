const menuLink = Array.from(document.querySelectorAll('.menu__link'));
const menuList = Array.from(document.querySelectorAll('.menu'))

menuLink.forEach((element) => {
	element.onclick = function () {
		let parentMenuLink = element.parentElement.querySelector('.menu');
		if (parentMenuLink) {
			if (parentMenuLink.classList.contains('menu_active')) {
				parentMenuLink.classList.remove('menu_active');
			} else {
				menuList.forEach((el) => el.classList.remove('menu_active'));
				parentMenuLink.classList.add('menu_active');
			};

			return false;
		};
	};
})