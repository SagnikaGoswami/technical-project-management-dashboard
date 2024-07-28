// fetch('./sample2.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

    const dataDisplay = document.getElementById("dataDisplay");


    document.addEventListener("DOMContentLoaded", function () {
        fetch('./sample2.json')
            .then(response => response.json())
            .then(data => {
                
            for(let item of data)
            {
                
                console.log(item)
                const id = document.createElement("p");
                id.textContent = "id: " + item.id;

                const title = document.createElement("p");
                title.textContent = "title: " + item.title;

                const completed = document.createElement("p");
                completed.textContent = "completed: " + item.completed;
                
                dataDisplay.appendChild(id);
                dataDisplay.appendChild(title);
                dataDisplay.appendChild(completed);
            }   
            })
            .catch(error => console.error("Error fetching JSON data:", error));
    });


