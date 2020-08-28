console.log("Bine boss nuj ce ai facut da merge")
///navbar js
const navSlide = () => {
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

}
navSlide()
 