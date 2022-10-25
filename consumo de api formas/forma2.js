const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector('#app2');

fetch(`${API_URL}/users`)
    .then((Response)=> Response.json())
    .then((users)=>{
        const tpl = users.map((user) => `<li>${user.name}-${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    });