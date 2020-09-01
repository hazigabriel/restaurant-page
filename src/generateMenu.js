export default generateMenuPage

let content = document.querySelector("#content");
let textPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

function generateMenuPage(){
	let menuWrappper = document.createElement("div");
	let menuHeader = document.createElement("h2");
	let menuItemWrapper = document.createElement("div");

	menuWrappper.setAttribute("class", "menu-page");
	menuHeader.setAttribute("class", "menu-title");
	menuHeader.textContent = "Menu";
	content.appendChild(menuWrappper);
	menuWrappper.appendChild(menuHeader);


	for(let i = 0; i < 6; i++) {
		let menuItemWrapper = document.createElement("div");
		let menuItemHeader = document.createElement("h2");
		let menuItemParagraph = document.createElement("p");
		let menuItemPrice = document.createElement("h3");

		menuItemWrapper.setAttribute("class", "menu-item")
		menuItemHeader.textContent = "-Vero gelato";
		menuItemParagraph.textContent = textPlaceholder;
		menuItemPrice.textContent = `${(Math.floor(Math.random() * 10) + 1)} coins` //generate a random round number, from 1 to 10

		menuWrappper.appendChild(menuItemWrapper);
		menuItemWrapper.appendChild(menuItemHeader);
		menuItemWrapper.appendChild(menuItemParagraph)
		menuItemWrapper.appendChild(menuItemPrice)
	}
 
}

