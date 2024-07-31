document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;
    let email = document.getElementById('registerEmail').value;
    let edad = document.getElementById('registerEdad').value;

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}&email=${email}&edad=${edad}`
    })
    .then(response => response.json())
    .then(data => {
        let messageElement = document.getElementById('registerMessage');
        messageElement.innerText = data.success ? data.success : data.error;
        messageElement.style.color = data.success ? 'green' : 'red';
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    fetch('/api/login', {
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
    fetch('/api/users')
    .then(response => response.json())
    .then(data => {
        let userList = document.getElementById('userList');
        userList.innerHTML = '';
        for (let user in data) {
            let userItem = document.createElement('div');
            userItem.innerText = data[user];
            userList.appendChild(userItem);
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('compraForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('compraUsername').value;
    let producto = document.getElementById('compraProducto').value;

    fetch('/api/compras', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&producto=${producto}`
    })
    .then(response => response.json())
    .then(data => {
        let messageElement = document.getElementById('compraMessage');
        messageElement.innerText = data.success ? data.success : data.error;
        messageElement.style.color = data.success ? 'green' : 'red';
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('showCompras').addEventListener('click', function() {
    let username = document.getElementById('showComprasUsername').value;

    fetch(`/api/compras/${username}`)
    .then(response => response.json())
    .then(data => {
        let compraList = document.getElementById('compraList');
        compraList.innerHTML = '';
        if (data.compras) {
            data.compras.forEach(compra => {
                let compraItem = document.createElement('div');
                compraItem.innerText = compra;
                compraList.appendChild(compraItem);
            });
        } else {
            let messageElement = document.createElement('div');
            messageElement.innerText = data.error;
            messageElement.style.color = 'red';
            compraList.appendChild(messageElement);
        }
    })
    .catch(error => console.error('Error:', error));
});
