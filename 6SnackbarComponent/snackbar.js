let snackbar = document.querySelector(".snackbar-container");

let showBtn = document.querySelector(".show-btn");

let hideBtn = document.querySelector(".material-icons");

let showFunc = () => {
	snackbar.style.visibility = "visible";
};

let hideFunc = () => {
	snackbar.style.visibility = "hidden";
};

showBtn.addEventListener("click", showFunc);

hideBtn.addEventListener("click", hideFunc);
