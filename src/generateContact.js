export default generateContactPage

let content = document.querySelector("#content");

function generateContactPage(){
	let contactWrapper = document.createElement("div");
	let contactHeader = document.createElement("h2");
	let contactLeftWrapper = document.createElement("div");
	let phoneNumberH3 = document.createElement("h3");
	let phoneNumber = document.createElement("p");
	let addressH3 = document.createElement("h3");
	let address = document.createElement("p");
	let emailH3 = document.createElement("h3");
	let email = document.createElement("p");
	let socialMediaH3 = document.createElement("h3")
	let socialMediaGithubWrap = document.createElement("p");
	let socialMediaGithubLink = document.createElement("a");
	let socialMediaInstagramWrap = document.createElement("p");
	let socialMediaInstagramLink = document.createElement("a")
	let socialMediaFacebookWrap = document.createElement("p");
	let socialMediaFacebookLink = document.createElement("a");
	let contactRightWrapper = document.createElement("div");
	let contactRightImg = document.createElement("div")

	contactWrapper.setAttribute("class", "contact-page");
	contactHeader.textContent = "Would you like to get in touch?";
	contactLeftWrapper.setAttribute("class", "contact-left");
	phoneNumberH3.textContent = "Phone number";
	phoneNumber.textContent = "+4012 345 6789";
	addressH3.textContent = "Address";
	address.textContent = "Calea Victoriei 123, Bucharest, Romania";
	emailH3.textContent = "E-mail address";
	email.textContent = "lagelateria@fakemail.com";
	socialMediaH3.textContent = "Social Media";
	socialMediaGithubLink.textContent = "-github";
	socialMediaGithubLink.href = "https://github.com/hazigabriel";
	socialMediaInstagramLink.textContent ="-instagram";
	socialMediaInstagramLink.href = "#";
	socialMediaFacebookLink.textContent = "-facebook";
	socialMediaFacebookLink.href = "#";
	contactRightWrapper.setAttribute("class", "contact-right")
	contactRightImg.setAttribute("class", "ice-cream-phone")

	content.appendChild(contactWrapper);
	contactWrapper.appendChild(contactHeader);
	contactWrapper.appendChild(contactLeftWrapper);
	contactLeftWrapper.appendChild(phoneNumberH3);
	contactLeftWrapper.appendChild(phoneNumber);
	contactLeftWrapper.appendChild(addressH3);
	contactLeftWrapper.appendChild(address);
	contactLeftWrapper.appendChild(emailH3);
	contactLeftWrapper.appendChild(email);
	contactLeftWrapper.appendChild(socialMediaH3);
	contactLeftWrapper.appendChild(socialMediaGithubWrap);
	socialMediaGithubWrap.appendChild(socialMediaGithubLink);
	contactLeftWrapper.appendChild(socialMediaInstagramWrap);
	socialMediaInstagramWrap.appendChild(socialMediaInstagramLink);
	contactLeftWrapper.appendChild(socialMediaFacebookWrap);
	socialMediaFacebookWrap.appendChild(socialMediaFacebookLink);
	contactWrapper.appendChild(contactRightWrapper);
	contactRightWrapper.appendChild(contactRightImg);

}