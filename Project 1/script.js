const main = document.querySelector('main')
console.log(main)

let htmlString = ""

for(let i=0; i<4; i++)
{
    htmlString += "<div></div>"
}

main.innerHTML = htmlString

// for(let i=0; i<4; i++)
// {
//     main.children[i].style.height = "47%"
//     main.children[i].style.width = "47%"
//     main.children[i].style.backgroundColor = "#FDFDFD"
//     main.children[i].style.border = "2px solid red"
// }

console.log(main.children);
// const title = document.createElement("div")
// console.log(title)
// title.className = "title"
// const iButton = document.querySelector(".iButton")

for(let i=0; i<4; i++)
{
    const title = document.createElement("div")
    title.className = "title"
    main.children[i].className = "asset"
    console.log(main.children[i])
    main.children[i].appendChild(title)
}

// main.children[0].appendChild(title)
// main.children[1].appendChild(title)
// main.children[2].appendChild(title)
// main.children[3].appendChild(title)



