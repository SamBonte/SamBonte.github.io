
//Array met familieleden

const setup = () => {
    //Aantal familieleden afdrukken op de console
    //alsook 1ste, 3de en 5de element in de array
    let familie = ["Sam","Mat","Nat","Eli","Floor"];
    console.log("Aantal familieleden:", familie.length);

    // oneven elementen afdrukken
    for (let i = 0; i < familie.length; i=i+2)
    {
        console.log("familielid " + familie[i] );
    }

    // oproepen functie (doorgeven via
    voegNaamToe(familie);

    console.log (familie.join(" - "));
}

const voegNaamToe = (leden) =>
{
    let naam =    prompt("voeg een naam toe");
    leden.push(naam);
    for (let i = 0; i < leden.length; i++)
    {
        console.log("familielid " + leden[i] );
    }

}
window.addEventListener("load", setup);


