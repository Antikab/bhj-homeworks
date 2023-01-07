// const tabs1 = [...document.getElementById('tabs1').querySelectorAll('.tab')];
// const tabsContents1 = [...document.getElementById('tabs1').querySelectorAll('.tab__content')];

// const tabs2 = [...document.getElementById('tabs2').querySelectorAll('.tab')];
// const tabsContents2 = [...document.getElementById('tabs2').querySelectorAll('.tab__content')];

// function setActive(event) {

// 	this.tabs.forEach(element => element.classList.remove('tab_active'));
// 	event.target.classList.add('tab_active');

// 	this.tabsContents.forEach(el => el.classList.remove("tab__content_active"));
// 	this.tabsContents[this.tabs.indexOf(event.target)].classList.add("tab__content_active");
// }

// tabs1.forEach(item => item.addEventListener('click', { handleEvent: setActive, tabs: tabs1, tabsContents: tabsContents1 }));
// tabs2.forEach(item => item.addEventListener('click', { handleEvent: setActive, tabs: tabs2, tabsContents: tabsContents2 }));


// class Tab {
// 	id = null
// 	tabs = null
// 	tabsContents = null;


// 	constructor(id) {
// 		this.id = id;
// 		this.tabs = [...document.getElementById(id).querySelectorAll('.tab')];
// 		this.tabsContents = [...document.getElementById(id).querySelectorAll('.tab__content')];

// 		this.start()
// 	}

// 	setActive(event) {
// 		this.tabs.forEach(element => element.classList.remove('tab_active'));
// 		event.target.classList.add('tab_active');

// 		this.tabsContents.forEach(el => el.classList.remove("tab__content_active"));
// 		this.tabsContents[this.tabs.indexOf(event.target)].classList.add("tab__content_active");
// 	}

// 	start() {
// 		this.tabs.forEach(item => item.addEventListener('click', this.setActive.bind(this)))
// 	}
// }

// new Tab('tabs1')
// new Tab('tabs2')