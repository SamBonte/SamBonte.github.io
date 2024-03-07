const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let sliderRed = document.getElementById("sliderRed");
	let sliderGreen = document.getElementById("sliderGreen");
	let sliderBlue = document.getElementById("sliderBlue");

	// Per slider checken of ze veranderingen of input krijgen
	sliderRed.addEventListener("change", update);
	sliderRed.addEventListener("input", update);

	sliderGreen.addEventListener("change", update);
	sliderGreen.addEventListener("input", update);

	sliderBlue.addEventListener("change", update);
	sliderBlue.addEventListener("input", update);
}

const update = () => {
	// variabelen halen, blokje, sliderWaarden en textWaarden
	let blokje = document.getElementsByClassName("colorPicker");
	let sliders = document.getElementsByClassName("slider");
	//sliderwaardes
	let valueRed = sliders[0].value;
	let valueGreen = sliders[1].value;
	let valueBlue = sliders[2].value;
	console.log("De waarde van de red slider is momenteel : " + valueRed);
	console.log("De waarde van de green slider is momenteel : " + valueGreen);
	console.log("De waarde van de blue slider is momenteel : " + valueBlue);

	// vervangen tekst door veranderde waarde
	let txtRed = document.getElementById("txtRed");
	let txtGreen = document.getElementById("txtGreen");
	let txtBlue = document.getElementById("txtBlue");
	txtRed.textContent = "" + valueRed;
	txtGreen.textContent = "" + valueGreen;
	txtBlue.textContent = "" + valueBlue;

	// kleur veranderen blokje door rgb waarden
	blokje[0].style.background = "rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";
}

window.addEventListener("load", setup);