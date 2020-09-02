export default generateNavbar


let navOuterWrapper = document.querySelector(".navOuterWrapper");

function generateNavbar(){
	let outerWrapper = document.createElement('div');
	let navLogo = document.createElement('div');
	let navLogoText = document.createElement("h4");
	let ul = document.createElement("ul")
	let mobileMenuWrapper = document.createElement("div");
 

	outerWrapper.setAttribute("class", "nav");
	navLogo.setAttribute("class", "nav-logo");
	navLogoText.textContent = "Logo"
	ul.setAttribute("class", "nav-links")
	mobileMenuWrapper.setAttribute("class", "mobile-menu")


	navOuterWrapper.appendChild(outerWrapper);
	outerWrapper.appendChild(navLogo);
	navLogo.appendChild(navLogoText)
	outerWrapper.appendChild(ul)
	outerWrapper.appendChild(mobileMenuWrapper)



	for(let i = 0; i < 4; i++){
		let li = document.createElement("li");
		let a = document.createElement("a");
		if(i == 0) {
			ul.appendChild(li);
			a.textContent = "Home";
			a.setAttribute("class", "nav-home");
			a.href = "#"
			li.appendChild(a);
		} else if (i == 1) {
			ul.appendChild(li);
			a.textContent = "About";
			a.setAttribute("class", "nav-about");
			a.href = "#"
			li.appendChild(a);

		} else if (i== 2) {
			ul.appendChild(li);
			a.textContent = "Menu";
			a.setAttribute("class", "nav-menu");
			a.href = "#"
			li.appendChild(a);
		} else {
			ul.appendChild(li);
			a.textContent = "Contact";
			a.setAttribute("class", "nav-contact");
			a.href = "#";
			li.appendChild(a);
		}
	 
	}
	for(let i = 1; i < 4; i++) {
		let line = document.createElement("div");
		if(i == 1){
			line.setAttribute("class", `line${i}`)
			mobileMenuWrapper.appendChild(line)
		} else if (i == 2) {
			line.setAttribute("class", `line${i}`)
			mobileMenuWrapper.appendChild(line)
		} else {
			line.setAttribute("class", `line${i}`)
			mobileMenuWrapper.appendChild(line)
		}
 
	}
	//js code for mobile version of the navbar, after clicking on the 3 vertical lines the navbar would appear sideways
	let navSlide = () => {
	const button = document.querySelector(".mobile-menu");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li")
	button.addEventListener('click', () => {
		nav.classList.toggle("nav-active")

		navLinks.forEach((link, index) =>{
		link.style.animation = `navLinkFade 0.5s ease forwards`
		})

		button.classList.toggle("toggle")

		})

	};
	navSlide()




};
 
