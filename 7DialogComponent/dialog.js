let alertDialog = document.querySelector(".alert-dialog");
let alertBtn = document.querySelector(".alert-btn");

let simpleDialog = document.querySelector(".simple-dialog");
let simpleBtn = document.querySelector(".simple-btn");

let confirmationDialog = document.querySelector(".confirmation-dialog");
let confirmationBtn = document.querySelector(".confirmation-btn");

let actionBtn1 = document.querySelector(".action-btn1");
let actionBtn2 = document.querySelector(".action-btn2");
let actionBtn3 = document.querySelector(".action-btn3");
let actionBtn4 = document.querySelector(".action-btn4");
let actionBtn5 = document.querySelector(".action-btn5");
let actionBtn6 = document.querySelector(".action-btn6");
let actionBtn7 = document.querySelector(".action-btn7");

let showAlert = () => {
	alertDialog.style.display = "flex";
	document.body.style.visibility = "hidden";
};

let showSimple = () => {
	simpleDialog.style.display = "flex";
	document.body.style.visibility = "hidden";
};

let showConfirmation = () => {
	confirmationDialog.style.display = "flex";
	document.body.style.visibility = "hidden";
};

let hideDialog = () => {
	alertDialog.style.display = "none";
	simpleDialog.style.display = "none";
	confirmationDialog.style.display = "none";
	document.body.style.visibility = "visible";
};

alertBtn.addEventListener("click", showAlert);
simpleBtn.addEventListener("click", showSimple);
confirmationBtn.addEventListener("click", showConfirmation);

actionBtn1.addEventListener("click", hideDialog);
actionBtn2.addEventListener("click", hideDialog);
actionBtn3.addEventListener("click", hideDialog);
actionBtn4.addEventListener("click", hideDialog);
actionBtn5.addEventListener("click", hideDialog);
actionBtn6.addEventListener("click", hideDialog);
actionBtn7.addEventListener("click", hideDialog);
