const setup = () => {
	//alle element met CSS klasse text ophalen + listener aan koppelen
    let texts=document.querySelectorAll(".text");
	for (let i=0;i<texts.length;i++) {
		texts[i].addEventListener("click", klik);
	}	
}


//tekst rood maken die klik event veroorzaakte
const klik = (event) => {
	event.target.style.color="red";
};

window.addEventListener("load", setup);