document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('#table-user tbody');
    const btnOpenModal = document.querySelector('#btn-open-modal-create-book');
    const btnCloseModal = document.querySelector('#btn-close-create-book');
    const modalCreateUser = document.querySelector('#div-create-book');
    
    // Abre o modal
    btnOpenModal.addEventListener('click', () => {
        modalCreateUser.classList.remove('hidden');
    });

    // Fecha o modal
    btnCloseModal.addEventListener('click', () => {
        modalCreateUser.classList.add('hidden');
    });

    // Função para carregar os usuários da localStorage e exibir na tabela
    function loadUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        tableBody.innerHTML = ''; // Limpa a tabela antes de adicionar os dados
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-3">${index + 1}</td>
                <td class="px-6 py-3">${user.name}</td>
                <td class="px-6 py-3">${user.email}</td>
                <td class="px-6 py-3">${user.birthday}</td>
                <td class="px-6 py-3">${user.password}</td>
                <td class="px-6 py-3">
                    <button class="text-red-500" onclick="deleteUser(${index})">Excluir</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;
        const birthday = document.getElementById('user-birthday').value;
        const password = document.getElementById('user-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ name, email, birthday, password });
        localStorage.setItem('users', JSON.stringify(users));

        form.reset();
        
        modalCreateUser.classList.add('hidden');
        
        loadUsers();
    });

    window.deleteUser = function(index) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
    }
    loadUsers();
});
