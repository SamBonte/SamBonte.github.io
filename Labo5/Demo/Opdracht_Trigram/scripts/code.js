const setup = () => {
    document.getElementById("btnToonTrigrams")
        .addEventListener("click", toonTrigrams)






}

const toonTrigrams = () => {
    //Haal input op + neem de value ervan
    let txtTrigram = document.getElementById("txtInput");
    let tekst = txtTrigram.value;
    //Haal het <ul> element op om er later de trigrams in te steken
    let listTrigrams = document.getElementById("listTrigrams");
    //Roep funcite aan om trigrams te maken van de input
    let trigrams = getTrigrams(tekst);
    let output = "";
    //Steek de gevonden trigram als list-item in de lijst
    for (let i = 0; i < trigrams.length; i++){ //verplaatst startwaarde
        output += "<li>" + trigrams[i]+"</li>";
    }
    //innerHTML interpreteert inhoud als HTML
    listTrigrams.innerHTML = output;

}

const getTrigrams = (tekst) => {
    //result = array met trigrams
    let result = [];
    let trigram;
    for (let i = 0; i<= tekst.length - 3; i++){
        trigram = tekst.slice(i, i+3);
        result.push(trigram);
    }
    return result;
}

window.addEventListener("load", setup);