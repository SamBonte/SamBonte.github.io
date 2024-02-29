const setup = () => {
    //alert
    window.alert("Dit is een mededeling");

    //confirm message
    console.log(window.confirm("Weet u het zeker?"));
    //prompt message
    console.log(window.prompt("Wat is uw naam", "onbekend"));

}
window.addEventListener("load", setup);