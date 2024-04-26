let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

//Normaal, nieuwe persoon
const voegPersoonToeAanLijst = (aangemaaktePersoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = aangemaaktePersoon.voornaam + " " + aangemaaktePersoon.familienaam;
    option.value = aangemaaktePersoon.email;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
}

//Vervang inhoud van bestaande persoon.
const bewerkBestaandePersoon = (aangemaaktePersoon, index) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = aangemaaktePersoon.voornaam + " " + aangemaaktePersoon.familienaam;
    option.value = aangemaaktePersoon.email;
    lstPersonen.replaceChild(option, lstPersonen.children[index]);
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    // indien ok, bewaar de ingegeven data.
    let elements = document.getElementsByClassName("invalid")
    if (elements.length === 0){
        let lstPersonen = document.getElementById("lstPersonen");
        let index = lstPersonen.selectedIndex;
        let aangemaaktePersoon = {};
        vulPersoonOpBasisVanUserInterface(aangemaaktePersoon);

        if (lstPersonen.selectedIndex === -1){
            // een nieuw aangemaakte persoon voegen we toe
            //geheugenadres wordt meegegeven
            //by reference
            let bestaat = false;
            for (let i = 0; i < personen.length; i++) {
                if (aangemaaktePersoon.email === personen[i].email){
                    window.alert("Dit email adres is al in gebruik.")
                    bestaat = true;
                }
            } if (!bestaat){
                personen.push(aangemaaktePersoon);
                voegPersoonToeAanLijst(aangemaaktePersoon);
            }
        } else {
            // een bestaande persoon in de lijst passen we aan
            //gegevens moeten worden upgedate !!!
            personen[index] = aangemaaktePersoon;
            // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
            bewerkBestaandePersoon(aangemaaktePersoon, index);

        }
    }
    setup();
};

const vulPersoonOpBasisVanUserInterface = (aangemaaktePersoon) => {
    let gegevens = document.querySelectorAll("input[type=text]")

    aangemaaktePersoon.voornaam = gegevens[0].value;
    aangemaaktePersoon.familienaam = gegevens[1].value;
    aangemaaktePersoon.geboortedatum = gegevens[2].value;
    aangemaaktePersoon.email = gegevens[3].value;
    aangemaaktePersoon.aantalkids = parseInt(gegevens[4].value);


}

const loadPerson = (event) => {
        event.target;

}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
   // slechte methode = let txtVoornaam = document.getElementById("txtVoornaam");
    // want als 1000 velden, > te veel werk
    //selecteer alle elementen van het type text
    let lstPersonen = document.getElementById("lstPersonen");
    //hoeveelste element in textbox geselcteerd. -1 = niks
    lstPersonen.selectedIndex = -1;
    let inputElementen = document.querySelectorAll('input[type=text]');
    inputElementen.forEach((elem) => {
        elem.value = "";
    })
    //om ook error messages weg te doen
    //zie validate js-bestand
    clearAllErrors();
};

const change = () => {
    let index = document.getElementById('lstPersonen').selectedIndex;
    let persoon = personen[index];
    let voornaam = document.getElementById('txtVoornaam');
    let famillienaam = document.getElementById('txtFamilienaam');
    let geboorteDatum = document.getElementById('txtGeboorteDatum');
    let email = document.getElementById('txtEmail');
    let aantalKids = document.getElementById('txtAantalKinderen');
    voornaam.value = persoon.voornaam;
    famillienaam.value = persoon.familienaam;
    geboorteDatum.value = persoon.geboortedatum;
    email.value = persoon.email;
    aantalKids.value = persoon.aantalkids;
}



// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", loadPerson);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    let lijst = lstPersonen.children;
    for (let i = 0; i <lijst.length; i++) {
        lijst[i].addEventListener("click", change);
    }
};



window.addEventListener("load", setup);