const setup = () => {
	//luistert of sliders aangepast
	initialize();
	//zorgt dat de kleuren geupdate worden bij verandering
	document.getElementById("btnSave")
		.addEventListener("click", () => {
			change(document.getElementById("savedColor"), document.getElementById("swatch"));
		});
	//luistert of removeButton pressed
	removeButtonPressed();



}
const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const change  = (e, swatch) => {
	let element = document.createElement("div");
	let btnElement = document.createElement("input");
	//savedColor
	element.setAttribute("class", "swatch2");
	//remove btn
	btnElement.setAttribute("type", "button");
	btnElement.setAttribute("value", "x");
	btnElement.setAttribute("class", "removeButtonStyle")
	//background element = swatch
	element.style.backgroundColor = swatch.style.backgroundColor;
	e.appendChild(element);
	//voeg button toe aan savedColor element
	element.appendChild(btnElement);
};

const removeButtonPressed = () => {
	//luistert of er geklikt wordt en wie de veroorzaker was
	// kijken welke klasse veroorzaker (savedColor/x-button) heeft:
	// ofwel class: swatch2, ofwel class: removeButtonStyle
	document.getElementById("savedColor").addEventListener("click", (event) => {
		//check of savedColor swatch2 klasse heeft
		if (event.target.classList.contains("swatch2")) {
			let savedColor = event.target.style.backgroundColor;
			/*RGB values uit savedColor halen via match() => return array met waardes*/
			// /.../ = pattern
			// \d+ = one or more digits (0-9)
			// g = global search. Niet enkel de eerste expressie vinden, ook de rest
			let rgbValues = savedColor.match(/\d+/g);

			if (rgbValues.length === 3) {
				document.getElementById("sldRed").value = rgbValues[0];
				document.getElementById("sldGreen").value = rgbValues[1];
				document.getElementById("sldBlue").value = rgbValues[2];
				update();
			}
			//vermijdt dat event-bubbling overspringt naar sliders
			event.stopPropagation();
		} else if (event.target.classList.contains("removeButtonStyle")) {
			//verwijdert savedColor element
			event.target.parentNode.remove();
		}
	});

};

window.addEventListener("load", setup);