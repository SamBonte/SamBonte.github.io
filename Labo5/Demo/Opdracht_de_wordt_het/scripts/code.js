const setup = () => {
    let txtInput = document.getElementById("txtInput").value;
    document.getElementById("btnDeWordtHet")
        .addEventListener("click", vervangDeDoorHet(txtInput, "de", "het"));

}

const vervangDeDoorHet = (tekst, zoek, vervangWoord) => {
    let result = tekst;
    result = result.toLowerCase();
    let idx = result.indexOf(zoek);

    while (idx !== -1){
        //tekst voor het gevonden woord in before
        let before = result.slice(0, idx);
        //tekst na het gevonden woord in after. start-index gevonden woord + lengte van het zoekwoord
        // | zo sla je "de" over
        let after = result.slice(idx + zoek.length, result.length);
        result = before+vervangWoord+after;
        //zorgen dat de idx naar de volgende "de" zoekt in de tekst
        idx = result.indexOf(zoek, idx+vervangWoord.length);

    }
   console.log (result);


}

window.addEventListener("load", setup);