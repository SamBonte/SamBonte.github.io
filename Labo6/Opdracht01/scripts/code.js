const setup = () => {
   let node = document.getElementById("abc");

   console.log(node.nodeName);
   console.log(node.nodeType);
   console.log(node.nodeValue);
}
window.addEventListener("load", setup);