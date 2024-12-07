document.getElementById('btn-open-modal-create-book').addEventListener('click', () => {
    document.getElementById('div-create-book').classList.remove('hidden');
});

document.getElementById('btn-close-create-book').addEventListener('click', () => {
    document.getElementById('div-create-book').classList.add('hidden');
});

function saveBook(event) {
    event.preventDefault();

    const title = document.getElementById('title-book').value;
    const author = document.getElementById('author-book').value;
    const category = document.getElementById('categoria').value; 
    const price = document.getElementById('price-book').value;
    const releaseDate = document.getElementById('date-book').value;

    const book = {
        id: Date.now(), 
        title,
        author,
        category,
        price,
        releaseDate
    };

    const books = JSON.parse(localStorage.getItem('books')) || [];
    
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));

    document.getElementById('title-book').value = '';
    document.getElementById('author-book').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('price-book').value = '';
    document.getElementById('date-book').value = '';

    document.getElementById('div-create-book').classList.add('hidden');

    displayBooks();
}

document.querySelector('form').addEventListener('submit', saveBook);

function displayBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];

    const tableBody = document.querySelector('#table-book tbody');
    tableBody.innerHTML = '';

    books.forEach(book => {
        const row = document.createElement('tr');
        row.classList.add('rounded');

        row.innerHTML = `
            <td class="px-6 py-3">${book.id}</td>
            <td class="px-6 py-3">${book.title}</td>
            <td class="px-6 py-3">${book.author}</td>
            <td class="px-6 py-3">${book.category}</td>
            <td class="px-6 py-3">${book.price}</td>
            <td class="px-6 py-3">${book.releaseDate}</td>
            <td class="px-6 py-3">
                <button class="text-red-600 hover:text-red-800" onclick="deleteBook(${book.id})">Excluir</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function deleteBook(bookId) {
    const books = JSON.parse(localStorage.getItem('books')) || [];

    const updatedBooks = books.filter(book => book.id !== bookId);

    localStorage.setItem('books', JSON.stringify(updatedBooks));

    displayBooks();
}

document.addEventListener('DOMContentLoaded', displayBooks);
