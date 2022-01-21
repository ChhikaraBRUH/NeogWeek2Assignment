let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");
let tab4 = document.getElementById("tab4");

let removeAllStyle = () => {
	tab1.style.backgroundColor = "#ffffff";
	tab1.style.color = "#000000";
	tab2.style.backgroundColor = "#ffffff";
	tab2.style.color = "#000000";
	tab3.style.backgroundColor = "#ffffff";
	tab3.style.color = "#000000";
	tab4.style.backgroundColor = "#ffffff";
	tab4.style.color = "#000000";
};

let tab1AddStyle = () => {
	removeAllStyle();
	tab1.style.backgroundColor = "#f9f2ff";
	tab1.style.color = "#6200ee";
};

let tab2AddStyle = () => {
	removeAllStyle();
	tab2.style.backgroundColor = "#f9f2ff";
	tab2.style.color = "#6200ee";
};

let tab3AddStyle = () => {
	removeAllStyle();
	tab3.style.backgroundColor = "#f9f2ff";
	tab3.style.color = "#6200ee";
};

let tab4AddStyle = () => {
	removeAllStyle();
	tab4.style.backgroundColor = "#f9f2ff";
	tab4.style.color = "#6200ee";
};

tab1.addEventListener("click", tab1AddStyle);
tab2.addEventListener("click", tab2AddStyle);
tab3.addEventListener("click", tab3AddStyle);
tab4.addEventListener("click", tab4AddStyle);
