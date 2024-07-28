const main = document.querySelector('main')
console.log(main)

let htmlString = ""

for(let i=0; i<4; i++)
{
    htmlString += "<div></div>"
}

main.innerHTML = htmlString

for(let i=0; i<4; i++)
{
    main.children[i].style.height = "580px"
    main.children[i].style.width = "47%"
    main.children[i].style.backgroundColor = "#FDFDFD"
    main.children[i].style.border = "2px solid red"
}


console.log(main.children);

