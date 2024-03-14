const setup = () => {

   document.getElementById("btnAantal").addEventListener("click", activeerCount);
}

//activeer Function
const activeerCount = () => {
    // Laat gebruiker toe om eerst iets in te vullen
    // daarna waneer ingevuld, kan count worden geïnisialiseerd
    let txtTekst = document.getElementById("txtTekst");
    let tekst = txtTekst.value;
    let txtZoek = document.getElementById("txtZoek");
    let zoek = txtZoek.value;
    let txtOutput = document.getElementById("txtOutput");
    let aantal = count(tekst, zoek);
    txtOutput.textContent = " " + aantal;
}
//count function
const count = (tekst, zoek) => {

   let result = 0;
   let idx = tekst.indexOf(zoek);
    while (idx !== -1){
        result++;
        idx = tekst.indexOf(zoek, idx+zoek.length);
    }
    return result;
}

window.addEventListener("load", setup);