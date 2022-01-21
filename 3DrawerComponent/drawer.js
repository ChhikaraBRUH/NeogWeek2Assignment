let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");
let tab4 = document.getElementById("tab4");
let childtab1 = document.getElementById("child-tab1");
let childtab2 = document.getElementById("child-tab2");
let childtab3 = document.getElementById("child-tab3");

let removeAllStyle = () => {
	tab1.style.backgroundColor = "#ffffff";
	tab1.style.color = "#000000";
	tab2.style.backgroundColor = "#ffffff";
	tab2.style.color = "#000000";
	tab3.style.backgroundColor = "#ffffff";
	tab3.style.color = "#000000";
	tab4.style.backgroundColor = "#ffffff";
	tab4.style.color = "#000000";
	childtab1.style.backgroundColor = "#ffffff";
	childtab1.style.color = "#000000";
	childtab2.style.backgroundColor = "#ffffff";
	childtab2.style.color = "#000000";
	childtab3.style.backgroundColor = "#ffffff";
	childtab3.style.color = "#000000";
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

let childtab1AddStyle = () => {
	removeAllStyle();
	childtab1.style.backgroundColor = "#f9f2ff";
	childtab1.style.color = "#6200ee";
};
let childtab2AddStyle = () => {
	removeAllStyle();
	childtab2.style.backgroundColor = "#f9f2ff";
	childtab2.style.color = "#6200ee";
};
let childtab3AddStyle = () => {
	removeAllStyle();
	childtab3.style.backgroundColor = "#f9f2ff";
	childtab3.style.color = "#6200ee";
};

tab1.addEventListener("click", tab1AddStyle);
tab2.addEventListener("click", tab2AddStyle);
tab3.addEventListener("click", tab3AddStyle);
tab4.addEventListener("click", tab4AddStyle);

childtab1.addEventListener("click", childtab1AddStyle);
childtab2.addEventListener("click", childtab2AddStyle);
childtab3.addEventListener("click", childtab3AddStyle);
