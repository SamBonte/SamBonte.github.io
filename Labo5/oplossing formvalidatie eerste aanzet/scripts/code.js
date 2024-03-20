const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilieNaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();

	//controleer of er geen elementen met invalid klasse gerapporteerd zijn
	if(!document.querySelector('.invalid')){
		alert('Proficiat!');
	}
};

const valideerVoornaam = () => {
	// We gebruiken een CSS-selector om het tekstveld uit de DOM-tree op te pikken.
	// Het is dus niet nodig om dat input element een id te geven, toch niet omwille
	// van de javascript code (voor de usability beter wel, nml. voor het for attribuut
	// van het bijbehorende label, als je nu op het label klikt komt de cursor niet
	// meer vanzelf in het tekstveld terecht).
	let txtVoornaam = document.querySelector("#voornaam>input");
	let voornaam = txtVoornaam.value.trim();

	// Hoe we nu aan de bijbehorende error span geraken is weer een ander verhaal,
	// we doen het hier op dezelfde manier als in stap 2 nml ervan uitgaan dat
	// deze net na het input element komt (zie reportError).
	//
	// We hadden echter ook gewoon
	//    let errVoornaam = document.querySelector("#voornaam>.errorMessage")
	// kunnen doen

	if (voornaam.length > 30) {
		reportError(txtVoornaam, "max. 30 karakters");
	} else {
		clearError(txtVoornaam);
	}
};

//valideer familienaam
const valideerFamilieNaam = () => {

	let txtFamilienaam = document.querySelector("#familienaam>input");
	let familienaam = txtFamilienaam.value.trim();
	//check veld ingevuld
	if(controleLeegVeld(txtFamilienaam, familienaam) === true) {
		reportError(txtFamilienaam, "verplicht veld");
	} else if (familienaam.length > 50) {
		reportError(txtFamilienaam, "max. 50 karakters");
	} else {
		clearError(txtFamilienaam);
	}
};
//valideer geboortedatum
const valideerGeboortedatum = () => {

	let txtGeboortedatum = document.querySelector("#geboortedatum>input");
	let geboortedatum = txtGeboortedatum.value.trim();

	if(controleLeegVeld(txtGeboortedatum, geboortedatum) === true) {
		reportError(txtGeboortedatum, "verplicht veld");
	} else if (!geboortedatum.match(/^\d{4}-\d{2}-\d{2}$/)) {
		// ^ = begin van de string | \d = cijfer van 0-9 verwacht
		reportError(txtGeboortedatum, "formaat is niet jjjj-mm-dd");
	} else {
		clearError(txtGeboortedatum);
	}
};
//valideer Email
const valideerEmail = () => {

	let txtEmail = document.querySelector("#email>input");
	let email = txtEmail.value.trim();

	if(controleLeegVeld(txtEmail, email) === true) {
		reportError(txtEmail, "verplicht veld");
	} else if (email.indexOf("@") === -1 || email.indexOf("@") !== email.lastIndexOf("@")) {
		// kijken of @ voorkomt of meermaals voorkomt
		reportError(txtEmail, "geen geldig email adres");
	} else {
		let atIndex = email.indexOf("@");
		let beforeAt = email.substring(0, atIndex);
		let afterAt = email.substring(atIndex + 1);
		//kijken of voor en na at zeker 1 karakter voorkomt
		if (beforeAt.length < 1 || afterAt.length < 1){
			reportError(txtEmail, "geen geldig email adres")
		} else {
			clearError(txtEmail);
		}
	}
};

//valideer aantal kinderen
const  valideerAantalKinderen = () => {

	let nbAantalkinderen = document.querySelector("#aantalkids>input");
	let aantalkinderen = nbAantalkinderen.value;

	if( aantalkinderen < 0 || isNaN(aantalkinderen)) {
		reportError(nbAantalkinderen, "is geen positief getal");
	} else if (aantalkinderen >= 99) {
		//moet kleiner zijn dan 99 anders error
		reportError(nbAantalkinderen, "is te vruchtbaar");
	} else {
		clearError(nbAantalkinderen);
	}
};





const controleLeegVeld = (inputElement, valueElement) => {
	return valueElement === "";
}

const reportError = (element, message) => {
	// als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
	element.className="invalid";
	element.nextElementSibling.innerHTML = message; // LET OP : nextSibling zou niet werken, die geeft een text node (d.i. immers de next sibling)
};

const clearError = (element) => {
	// als je deze gebruikt, behoeft het error element natuurlijk geen id attribuute
	element.className="";
	element.nextElementSibling.innerHTML = "";
};

window.addEventListener("load", setup);