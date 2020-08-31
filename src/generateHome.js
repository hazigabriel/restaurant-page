export default generateHomePage

let content = document.querySelector("#content");

function generateHomePage(){
	let homeWrapper = document.createElement("div");
	let homeImg = document.createElement("div");
	let homeImgHeader = document.createElement("h2");
	let homeContent = document.createElement("div");
	let homeParagraph = document.createElement("p");

	homeWrapper.setAttribute("class", "home-page");
	homeImg.setAttribute("class", "home-page-img");
	homeContent.setAttribute("class", "home-page-content");
	homeImgHeader.textContent = "La Gelateria";
	homeParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."


	content.appendChild(homeWrapper);
	homeWrapper.appendChild(homeImg);
	homeImg.appendChild(homeImgHeader);
	homeWrapper.appendChild(homeContent);
	homeContent.appendChild(homeParagraph)

 
}