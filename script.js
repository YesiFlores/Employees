const usersPerPage = 6;
let currentPage = 1;

function fetchUsers(page) {
    fetch(`https://reqres.in/api/users?page=${page}&per_page=${usersPerPage}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.data);
            const markup = json.data.map(el => {
                return `
                <li class="card-container">
                    <div class="image-container">
                      <img class="round" src="${el.avatar}">
                    </div>
                     <div class="name-container"> 
                         <span class="firstName">${el.first_name}</span>
                         <span class="lastName">${el.last_name}</span>
                     </div> 
                     <a href="mailto:${el.email}">Contact</a>
                </li>
                `;
            });

            console.log(markup);
            document.querySelector('.list-container').innerHTML = markup.join('');
        });
}

fetchUsers(currentPage);

document.querySelector('#nextPage').addEventListener('click', () => {
    currentPage++;
    fetchUsers(currentPage);
});

document.querySelector('#prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchUsers(currentPage);
    }
});
