const div = document.createElement('div')
const main = document.querySelector('main')
console.log(main)
div.className = "asset-containers"
const addText = document.createTextNode("Hi I am an asset container")
div.appendChild(addText)
// document.main.appendChild(div)

console.log(main.childNodes)
main.appendChild(div)

div.style.backgroundColor = "aqua"
div.style.position = "absolute"
div.style.top = "397px"
div.style.left = "214px"
div.style.width = "480px"
div.style.height = "580px"
div.style.borderRadius = "15px"
console.log(div);
/*
width: 480px;
height: 580px;
top: 397px;
left: 214px;
gap: 0px;
border-radius: 15px 0px 0px 0px;
opacity: 0px;

*/