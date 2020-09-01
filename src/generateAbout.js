export default generateAboutPage

let content = document.querySelector("#content");

function generateAboutPage(){
	let aboutPageWrapper = document.createElement("div");
	let aboutHeader = document.createElement("h2");
	let aboutParagraph1 = document.createElement("p");
	let aboutParagraph2 = document.createElement("p");
	let aboutImg = document.createElement("img");

	aboutPageWrapper.setAttribute("class", "about-page")
	aboutImg.src = "../images/ice-cream-cone.png";
	aboutHeader.textContent = "Well, it started out quite simple";
	aboutParagraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus in. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Arcu vitae elementum curabitur vitae nunc. Sit amet consectetur adipiscing elit. Blandit aliquam etiam erat velit scelerisque in dictum non. Amet volutpat consequat mauris nunc. ";
	aboutParagraph2.textContent = "Tristique senectus et netus et malesuada fames ac turpis. Neque laoreet suspendisse interdum consectetur libero. Velit scelerisque in dictum non. Ornare arcu dui vivamus arcu felis. Feugiat vivamus at augue eget arcu dictum varius duis. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Aliquet nec ullamcorper sit amet risus nullam eget. Pellentesque massa placerat duis ultricies. Eget nunc scelerisque viverra mauris in aliquam. Lacus vel facilisis volutpat est velit egestas dui. Luctus accumsan tortor posuere ac ut consequat semper. Ultrices sagittis orci a scelerisque purus semper eget duis. Elit at imperdiet dui accumsan sit amet nulla. Purus in massa tempor nec feugiat nisl. Et tortor at risus viverra adipiscing at in.  "


	content.appendChild(aboutPageWrapper);
	aboutPageWrapper.appendChild(aboutHeader);
	aboutPageWrapper.appendChild(aboutParagraph1);
	aboutPageWrapper.appendChild(aboutParagraph2);
	aboutPageWrapper.appendChild(aboutImg)
		
}