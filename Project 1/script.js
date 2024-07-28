const main = document.querySelector('main')
console.log(main)

let htmlString = ""

for(let i=0; i<4; i++)
{
    htmlString += "<div></div>"
}

main.innerHTML = htmlString

let htmlString2 = ""
// const title = document.querySelector('.title')

for(let i=0; i<4; i++)
{
    main.children[i].style.height = "47%"
    main.children[i].style.width = "47%"
    main.children[i].style.backgroundColor = "#FDFDFD"
    main.children[i].style.border = "2px solid red"
    // main.childre[i].className = "assets"
}

console.log(main.children);

for(let i=0; i<4; i++)
{
    htmlString2 += "<div></div>"
}



// title.style.backgroundColor = "aqua"

// main.children[1].className = "asset1"
// main.children[2].className = "asset2"
// main.children[3].className = "asset3"
// main.children[4].className = "asset4"

console.log(main.children);

