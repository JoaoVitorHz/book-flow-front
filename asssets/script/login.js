function loginUser(event) {
    event.preventDefault();  

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        if (storedUser.email === email && storedUser.password === password) {
            alert('Login bem-sucedido!');
            
            window.location.href = 'index.html';
        } else {
            alert('E-mail ou senha incorretos!');
        }
    } else {
        alert('Nenhum usuário registrado encontrado!');
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', loginUser);
