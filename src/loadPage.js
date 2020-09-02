import generateNavbar from "./addNavbar";
import generateHomePage from "./generateHome";

export default loadPage

let content = document.querySelector("#content");

function loadPage(){
	generateNavbar()
	generateHomePage()
 
}