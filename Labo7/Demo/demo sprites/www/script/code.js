const setup = () => {
	//als scherm kleiner/groter voer update-functie uit
	window.addEventListener("resize", updateSize);
	
	// al 1 keer op voorhand oproepen, voor het geval 
	// dat de gebruiker nooit manueel het browservenster
	// groter of kleiner maakt
	updateSize();

	//als er op speelveld geclickt wordt moet sprite moveSprite uitgevoerd worden
	let speelveld=document.getElementById("speelveld");
	speelveld.addEventListener("click", moveSprite);
}

const updateSize = () => {
	// telkens het window van grootte verandert,
	// wordt deze method opgeroepen
	// 
	// Merk op dat de <div> voor layout redenen "leeg" is,
	// omdat het enige kind absoluut gepositioneerd is. Als
	// we niets speciaals doen zal het dus 0px hoog zijn.
	// Daarom stellen we hier programmatorisch de breedte
	// en hoogte in, zodat het altijd alle ruimte inneemt.
	let speelveld=document.getElementById("speelveld");
	speelveld.style.width=window.innerWidth+"px";
	speelveld.style.height=window.innerHeight+"px";
}

const moveSprite = () => {
	// Deze function wordt opgeroepen telkens de gebruiker
	// op het speelveld klikt.

    let sprite=document.getElementsByClassName("sprite")[0];
	let speelveld=document.getElementById("speelveld");
	/*offsetWidth // property returns viewable width of an element
	* (in pixels) including padding,  border and scrollbar
	* , but not the margin
	* clientWidth viewable width the padding, but not the border, scrollbar or margin*/
	let maxLeft=speelveld.clientWidth - sprite.offsetWidth;
	let maxHeight=speelveld.clientHeight - sprite.offsetHeight;
	
	// verplaats de sprite
	let left=Math.floor(Math.random()*maxLeft);
	let top=Math.floor(Math.random()*maxHeight);
	//style.left = x-as
	sprite.style.left=left+"px";
	//style.top = y-as
	sprite.style.top=top+"px";
}

window.addEventListener("load", setup);