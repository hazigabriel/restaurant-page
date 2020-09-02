import generateNavbar from "./addNavbar";
import generateHomePage from "./generateHome";
import generateAboutPage from "./generateAbout"
import generateMenuPage from "./generateMenu";
import generateContactPage from "./generateContact";




let content = document.querySelector("#content");

function renderDefaultPage() {
	generateNavbar();
	generateHomePage()
}
function renderHomePage(){
	let navHome = document.querySelector(".nav-home");
	navHome.addEventListener("click", function() {
		content.innerHTML = "";
		generateHomePage();
	});
};

function renderAboutPage(){
	let navAbout = document.querySelector(".nav-about");
	navAbout.addEventListener("click", function() {
		content.innerHTML = "";
		generateAboutPage();
	});
};

function renderMenuPage(){
	let navMenu = document.querySelector(".nav-menu");
	navMenu.addEventListener("click", function() {
		content.innerHTML = "";
		generateMenuPage();
	});
};

function renderContactPage(){
	let navContacts = document.querySelector(".nav-contact");
	navContacts.addEventListener("click", function() {
		content.innerHTML = "";
		generateContactPage();
	});
};





export {
	renderDefaultPage,
	renderHomePage,
	renderAboutPage,
	renderMenuPage,
	renderContactPage
}