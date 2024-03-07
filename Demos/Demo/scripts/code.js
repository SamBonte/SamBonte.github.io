const setup = () => {
    let lblCursus = document.getElementById("lblCursus");
    /*in het HTML document moet je op zoek gaan naar een element met het id lblCursus
    * dat element/object wordt opgeslagen in lblCursus*/
    lblCursus.addEventListener("mouseover", change);

    /*hieronder: je */
    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
    /*IS HETZELFDE: document.getElementById("btnSend").addEventListener("click", show);*/
}
window.addEventListener("load", setup);
/*const x = () => {code} zit in ieder stukje js-code*/
/*wat betekent window.addEventListener Load ?
luistert of er een load event is afgevuurd, wat moet hij doen ? naar setup functie*/

/*fucties die worden uitgevoerd als bepaald event wordt afgevuurd*/
const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

const show = () => {
    let txtName = document.getElementById("txtName");

    if(txtName.value != ""){
        alert ("jouw naam is " + txtName.value);
        /*console.log = logt uw veranderingen
        * alert geeft text/melding*/
        console.log("jouw naam is " + txtName.value)
        /*hierboven concatinatie, text + de INHOUD van variabele txtName*/
        /*hieronder = intuïtiever voor meneer, alternatief*/
        console.log(`jouw naam is ${txtName.value}`)
    } else {
        alert ("gelieve naam in te vullen");
    }
}