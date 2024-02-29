const setup = () => {

    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", doSubstring);

}
window.addEventListener("load", setup);

const doSubstring = () => {
    //Haal input velden op
    let inputString=document.getElementById("inputString").value;
    let startPosition=parseInt(document.getElementById("startPosition").value);
    let endPosition=parseInt(document.getElementById("endPosition").value);
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
};