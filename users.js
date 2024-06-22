document.addEventListener('DOMContentLoaded', () => {
    const usersList = document.getElementById('users-list');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                li.addEventListener('click', () => {
                    showUserDetails(user);
                });
                usersList.appendChild(li);
            });
        })
        .catch(error => console.error('Ошибка:', error));

    function showUserDetails(user) {
        const userDetails = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Телефон:</strong> ${user.phone}</p>
            <p><strong>Вебсайт:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <button onclick="goBack()">Назад</button>
        `;
        usersList.innerHTML = userDetails;
    }

    window.goBack = function() {
        location.reload();
    };
});
