const setup = () => {

    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", doSubstring);

}

const doSubstring = () => {
    //Haal input velden op
    let inputString=document.getElementById("inputString").value;
    let startPosition=parseInt(document.getElementById("startPosition").value, 10);
    let endPosition=parseInt(document.getElementById("endPosition").value, 10);
    let txtOutput = document.getElementById("output");

    //controleer of getallen geldig zijn en start < eindpositie
    if(startPosition >= 0 && endPosition >= 0 && startPosition < endPosition && !isNaN(startPosition) && !isNaN(endPosition)){
        //gebruik functie substring() om result te krijgen als controle OK
        // Vervang (geen output) door het resultaat
        txtOutput.innerHTML =  inputString.substring(startPosition, endPosition);

    } else {
        alert("Ongeldige invoer. Zorg ervoor dat de startpositie kleiner is dan de eindpositie.");
        alert("En dat de start-/eindpositie positieve/geldige getallen zijn.");
    }
}
window.addEventListener("load", setup);
//parseInt() string converteren naar integer
/*OPL meneer:


const setup = () => {
	let btnSubstring = document.getElementById("btnSubstring");
	btnSubstring.addEventListener("click", substring);
}

const substring = () => {
	let txtOutput = document.getElementById("txtOutput");
	let txtInput = document.getElementById("txtInput");
	let txtBegin = document.getElementById("txtBegin");
	let txtEinde = document.getElementById("txtEinde");

	let tekst = txtInput.value;
	let idxBegin=parseInt(txtBegin.value, 10);
	let idxEinde=parseInt(txtEinde.value, 10);

	let resultaat = tekst.substring(idxBegin, idxEinde);
	txtOutput.innerHTML=resultaat;
}

window.addEventListener('load',setup);


/*
p-element -> inhoud InnerHTML  <p id="txtTekst">dit is een test </p>

input-elememt -> inhoud Value  <input id="txtName" type="text">*/
