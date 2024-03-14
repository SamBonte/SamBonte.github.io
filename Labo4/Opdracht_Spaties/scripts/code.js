const setup = () => {
    document.getElementById("btnOpConsole")
        .addEventListener("click", splitsOp)



}
const splitsOp = () => {
    let txtConsole = document.getElementById("txtConsole");
    let tekst = txtConsole.value;
    let tekstMetSpaties="";
    for (let i = 0; i<tekst.length; i++){
        tekstMetSpaties+= tekst.charAt(i);
        tekstMetSpaties+= " ";
    }
    console.log(tekstMetSpaties);
}

window.addEventListener("load", setup);