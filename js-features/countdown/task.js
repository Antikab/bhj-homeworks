const addTimer = function () {
	const elementTimer = document.getElementById('timer');
	elementTimer.textContent--;

	if (elementTimer.textContent === '0') {
		alert('Вы победили в конкурсе!');
		clearInterval(intervalId);
	}
}

let intervalId = setInterval(addTimer, 1000);