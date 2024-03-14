const setup = () => {
    document.getElementById("btnOpConsole")
        .addEventListener("click", maakMetSpaties);

}
const maakMetSpaties = (inputText) => {
    let result="";
    inputText = document.getElementById("txtConsole").value.replace(" ", "");
    console.log(inputText)
    for (let i = 0; i<inputText.length; i++) {
        result += inputText.charAt(i);
        result += " ";
    }
    console.log(result);
}

window.addEventListener("load", setup);