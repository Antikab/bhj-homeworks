const addClickerCounter = function () {
	const clickerCounter = document.getElementById('clicker__counter');
	imageClick.width = ++clickerCounter.textContent % 2 ? 250 : 200;
}

const imageClick = document.getElementById('cookie');
imageClick.onclick = addClickerCounter;