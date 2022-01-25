let allTabs = document.getElementsByClassName("tab-div");

function tabActiveToggleFunc(el) {
	for (let i = 0; i < allTabs.length; i++) {
		allTabs[i].classList.remove("clicked-tab");
	}
	el.classList.add("clicked-tab");
}
