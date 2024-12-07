function saveUserData(event) {
    event.preventDefault();  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;

    const userData = {
        name,
        email,
        dob,
        password,
    };

    localStorage.setItem('user', JSON.stringify(userData));

    alert('Dados salvos com sucesso!');

    window.location.href = 'login.html';
}

const form = document.querySelector('form');
form.addEventListener('submit', saveUserData);
