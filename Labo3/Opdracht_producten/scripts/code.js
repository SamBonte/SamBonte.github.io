const setup = () => {
    //button pressed ?
    let btnHerbereken = document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click", herbereken);
}

// HerberekenFunction
const herbereken = () => {
    // variabelen
    let prijsArray = document.getElementsByClassName("prijs");
    let aantalArray = document.getElementsByClassName("aantal");
    let btwArray = document.getElementsByClassName("btw");
    let subtotaalArray = document.getElementsByClassName("subtotaal");
    let totaalBedrag = document.getElementsByClassName("totaal");

    let totaal = 0;

    // Loop tot alle producten doorlopen zijn
    for(let i = 0; i < prijsArray.length;i++){
        // Stap 1: product prijs uit DOM-tree halen, type = String
        // String => float, want anders kan hij van 12.20 gewoon 12 maken
        let prijsTekst = prijsArray[i].textContent;
        let prijs = parseFloat(prijsTekst);
        console.log(prijs);

        // Stap 2: aantal uit DOM-tree, type = number
        // naar float anders 1.5 => 1
        let aantal = parseFloat(aantalArray[i].value);
        let isInvalid = false; /*Delete every $comment if you want to have negative aantal*/
        if (aantal < 0){ /*$ whole if statement*/
            window.alert("Warning: You have a negative number of products !");
            aantalArray[i].value = 0;
            isInvalid = true;
        } else if (isNaN(aantal)){
            window.alert("Please enter a valid number: e.g. 2.5")
            isInvalid = true;
        }

        console.log(aantal);

        // Stap 3: btw percentage uit DOM-tree, type = String
        // vervang de % door niets
        let btwTekst = btwArray[i].textContent;
        let btw = parseFloat(btwTekst);
        console.log(btw);

        // Stap 4: berekenen subtotaal
        let subtotaal = (aantal * prijs) * (1 + (btw / 100));
        if (isInvalid){ /*$ whole if statement*/
            subtotaalArray[i].value = "0,00 Eur";
            subtotaal = 0;
        }
        subtotaalArray[i].textContent = subtotaal.toFixed(2).replace(".", ",") + " Eur";
        console.log(subtotaalArray[i].textContent);

        totaal += subtotaal;
    }
    totaalBedrag[0].textContent = totaal.toFixed(2).replace(".", ",") + " Eur";
}


window.addEventListener("load", setup);