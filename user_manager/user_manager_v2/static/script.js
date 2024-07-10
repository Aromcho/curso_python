document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
        let messageElement = document.getElementById('registerMessage');
        messageElement.innerText = data.message;
        messageElement.style.color = response.ok ? 'green' : 'red';
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
        let messageElement = document.getElementById('loginMessage');
        messageElement.innerText = data.message;
        messageElement.style.color = response.ok ? 'green' : 'red';
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('showUsers').addEventListener('click', function() {
    fetch('/users')
    .then(response => response.json())
    .then(data => {
        let userList = document.getElementById('userList');
        userList.innerHTML = '';
        for (let user in data) {
            let userItem = document.createElement('div');
            userItem.innerText = `Usuario: ${user} | Contraseña: ${data[user]}`;
            userList.appendChild(userItem);
        }
    })
    .catch(error => console.error('Error:', error));
});
