let toggleBtn = document.querySelector(".toggle");

let toggleBadge = document.querySelector(".toggle-badge");

toggleBadge.style.visibility = "visible";

let toggleVisibility = () => {
	console.log("click");
	if (toggleBadge.style.visibility === "visible") {
		toggleBadge.style.visibility = "hidden";
	} else {
		toggleBadge.style.visibility = "visible";
	}
};

toggleBtn.addEventListener("click", toggleVisibility);
