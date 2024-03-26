const setup = () => {
    let lijstFamilieleden = ["x", "y", "z", "a", "b"]
    console.log(lijstFamilieleden.length);

    for (let i = 1; i<(lijstFamilieleden.length + 1); i++){
        if (i % 2 !== 0){
            console.log(lijstFamilieleden[i-1]);
        }
    }
    let input = prompt("Voeg extra naam toe aan de lijst: ");

    voegNaamToe(lijstFamilieleden, input);
    console.log(lijstFamilieleden);
    console.log(lijstFamilieleden.join());

    //alerts uittesten
    let alertX = window.alert("hello");
    let confirmY = window.confirm("You sure ?");
    let promptZ = window.prompt("Name: ", "onbekend");
    console.log(alertX, confirmY, promptZ);


}

const voegNaamToe = (array, naam) => {
    array.push(naam);
}


window.addEventListener("load", setup);