class Tab {
	id = null
	tabs = null
	tabsContents = null;

	#red = [];

	constructor(id) {
		this.id = id;
		this.tabs = [...document.getElementById(id).querySelectorAll('.tab')];
		this.tabsContents = [...document.getElementById(id).querySelectorAll('.tab__content')];

		this.start()
	}

	get red() {
		return this.#red
	}

	set red(val) {
		if (!Array.isArray(val)) {
			throw new Error('значение должно быть массивом')
		}
		this.#red = val;
	}

	setActive(event) {
		console.log('this', this);

		this.tabs.forEach(element => element.classList.remove('tab_active'));
		event.target.classList.add('tab_active');

		this.tabsContents.forEach(el => el.classList.remove("tab__content_active"));
		this.tabsContents[this.tabs.indexOf(event.target)].classList.add("tab__content_active");
	}

	start() {
		this.tabs.forEach(item => item.addEventListener('click', this.setActive.bind(this)))
		// this.tabs.forEach(item => item.addEventListener('click', this.setActive))
	}
}