// const main = document.querySelector('main')
// console.log(main)

// let htmlString = ""
// for(let i=0; i<4; i++)
// {
//     htmlString += "<div></div>"
// }

// main.innerHTML = htmlString

// console.log(main.children);

// for(let i=0; i<4; i++)
// {
//     const title = document.createElement("div")
//     title.className = "title"
//     const iButton = document.createElement("img")
//     iButton.className = "iButton"
//     main.children[i].className = "asset"
//     console.log(main.children[i])
//     main.children[i].appendChild(title)
//     title.appendChild(iButton)
//     iButton.src = "assets/i-button.svg"
// }



// main.children[0].appendChild(title)
// main.children[1].appendChild(title)
// main.children[2].appendChild(title)
// main.children[3].appendChild(title)




// Task 2 => JSON File

let http = new XMLHttpRequest();

http.open('get', 'products.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);

        let output = "";

        for(let item of products){
            output += `
                <div class="products">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <p class="price">
                        <span>${item.price}</span>
                        <span>&euro;</span>
                    </p>

            `;
        }
    }
}

