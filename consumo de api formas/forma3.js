/*Forma para ver los datos en forma de texto */
const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector('#app2');
const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
    .then((Response)=> Response.json())
    .then((users)=>{
        users.forEach((user) => {
            let element = document.createElement("li");
            element.appendChild(
                document.createTextNode(`${user.name}-${user.email}`)
            );
            ul.appendChild(element);
        });
        HTMLResponse.appendChild(ul);
    });