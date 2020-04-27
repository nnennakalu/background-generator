var css = document.querySelector("code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var orientation = document.querySelectorAll('input[type="radio"]');
console.log(orientation);

function currentSettings() {
	var CSSprop = window.getComputedStyle(body, null).getPropertyValue("background-image");;
	css.textContent = CSSprop;
}

currentSettings();

function setGradient(e) {
	currentTarget = e.target;
	console.log(currentTarget);
	console.log(currentTarget.value);

	if (currentTarget.type === "radio") {

		body.style.background =
			"linear-gradient(" +
			currentTarget.value +
			", " +
			color1.value +
			"," +
			color2.value +
			")";
	}

	currentSettings();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

for (let i = 0; i < orientation.length; i++) {
	const element = orientation[i];
	element.addEventListener('click', function (e) {
		setGradient(e);
	}, false);

}