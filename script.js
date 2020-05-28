var css = document.querySelector("code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var orientation = document.querySelectorAll('input[type="radio"]');


// Function Declarations
function currentSettings() {
	var CSSprop = window.getComputedStyle(body, null).getPropertyValue("background-image");
	css.textContent = CSSprop;
}
currentSettings();

function getRandomValues() {
	return '#' + (function generate(hue) {
		return (hue += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) &&
			(hue.length == 6) ? hue : generate(hue);
	})('');
}

function cssStyle(currentTarget) {
	body.style.background = `linear-gradient( ${currentTarget.value}, ${color1.value}, ${color2.value})`;
}

function setGradient(e) {
	currentTarget = e.target;

	if (currentTarget.type === "radio") {
		cssStyle(currentTarget);
	}

	if (currentTarget.value === "circle") {
		color1.value = getRandomValues();
		color2.value = getRandomValues();
		cssStyle(currentTarget);
	}

	currentSettings();
}


// Event Listeners
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

for (let i = 0; i < orientation.length; i++) {
	const element = orientation[i];
	element.addEventListener('click', function (e) {
		setGradient(e);
	}, false);

}