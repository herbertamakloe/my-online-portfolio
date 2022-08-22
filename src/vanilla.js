let expandDiv = document.querySelector(".card");
let speed = 5;

function expanding() {
	let scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
	let scrollAndSpeed = scrolltop / speed;
	//Expand using transform
	//expandDiv.style.transform = "scalex( " + Math.min(Math.max(scrollAndSpeed, 1), 10) + ")";

	//Or using width
	expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 20), 95) + "%";
}

window.addEventListener(
	"scroll",
	function () {
		// on page scroll
		requestAnimationFrame(expanding); // call parallaxing()
	},
	false
);

console.log("I am vanilla file baby");
