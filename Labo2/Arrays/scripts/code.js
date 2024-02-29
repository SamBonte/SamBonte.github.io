
//Array met familieleden
let familieleden = ["Sam","Mat","Nat","Eli","Floor"];
const setup = () => {
    //Aantal familieleden afdrukken op de console
    //alsook 1ste, 3de en 5de element in de array
    console.log("Aantal familieleden:", familieleden.length);
    console.log("Eerste element:", familieleden[0]);
    console.log("Derde element:", familieleden[2]);
    console.log("Vijfde element:", familieleden[4]);

    //Voegt member toevoegen en de array afdrukken op de console
    let newMember = prompt("Add new member:");
    VoegNaamToe(newMember);
    console.log("Array na toevoeging member: ", familieleden);

    //Array omzetten naar een string
    let familieString = familieleden.join(", ");
    console.log("Array als string: ", familieString);


}
window.addEventListener("load", setup);

//functie om member aan de familieleden toe te voegen
const VoegNaamToe = (naam) => {
    familieleden.push(naam);
    console.log(familieleden);
}


