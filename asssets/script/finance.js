function loadFinanceData() {
    const financeData = JSON.parse(localStorage.getItem('financeData')) || [];
    const tableBody = document.getElementById('table-finance').querySelector('tbody');
    tableBody.innerHTML = ''; 

    financeData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-3">${index + 1}</td>
            <td class="px-6 py-3">${entry.product}</td>
            <td class="px-6 py-3">${entry.paymentMethod}</td>
            <td class="px-6 py-3">${entry.status}</td>
            <td class="px-6 py-3">${entry.value}</td>
            <td class="px-6 py-3">
                <button onclick="editFinanceEntry(${index})" class="text-blue-500">Editar</button>
                <button onclick="deleteFinanceEntry(${index})" class="text-red-500">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function addFinanceEntry(event) {
    event.preventDefault(); 
    const product = document.getElementById('product').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const value = document.getElementById('value').value;
    const status = document.getElementById('status').value;


    const newEntry = {
        product,
        paymentMethod,
        value,
        status
    };

    console.log(newEntry)


    const financeData = JSON.parse(localStorage.getItem('financeData')) || [];
    financeData.push(newEntry);

    localStorage.setItem('financeData', JSON.stringify(financeData));
    loadFinanceData();
}

function editFinanceEntry(index) {
    const financeData = JSON.parse(localStorage.getItem('financeData')) || [];
    const entry = financeData[index];

    document.getElementById('product').value = entry.product;
    document.getElementById('payment-method').value = entry.paymentMethod;
    document.getElementById('value').value = entry.value;
    document.getElementById('status').value = entry.status;

    financeData.splice(index, 1);
    localStorage.setItem('financeData', JSON.stringify(financeData));

    document.getElementById('div-create-book').classList.remove('hidden');
}

function deleteFinanceEntry(index) {
    const financeData = JSON.parse(localStorage.getItem('financeData')) || [];
    financeData.splice(index, 1);
    localStorage.setItem('financeData', JSON.stringify(financeData));
    loadFinanceData(); 
}

document.getElementById('btn-close-create-book').addEventListener('click', function () {
    document.getElementById('div-create-book').classList.add('hidden');
});

document.getElementById('btn-open-modal-create-book').addEventListener('click', function () {
    document.getElementById('div-create-book').classList.remove('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    loadFinanceData(); 

    const form = document.querySelector('form');
    form.addEventListener('submit', addFinanceEntry);
});
