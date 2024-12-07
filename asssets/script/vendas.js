document.addEventListener('DOMContentLoaded', () => {
    function saveSale() {
        const product = document.getElementById('product').value;
        const paymentMethod = document.getElementById('payment-method').value;
        const price = document.getElementById('price').value;
        const value = document.getElementById('status').value;

   
        const sale = {
            id: Date.now(), 
            product,
            paymentMethod,
            price,
            value,
        };

        const sales = JSON.parse(localStorage.getItem('sales')) || [];

        sales.push(sale);

        localStorage.setItem('sales', JSON.stringify(sales));

        document.getElementById('product').value = '';
        document.getElementById('payment-method').value = '';
        document.getElementById('price').value = '';
        document.getElementById('status').value = '';

        displaySales();
    }

    function displaySales() {
        const salesTableBody = document.getElementById('sales-table-body');
        salesTableBody.innerHTML = ''; 

        const sales = JSON.parse(localStorage.getItem('sales')) || [];

        sales.forEach(sale => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td class="px-6 py-3">${sale.id}</td>
                <td class="px-6 py-3">${sale.product}</td>
                <td class="px-6 py-3">${sale.paymentMethod}</td>
                <td class="px-6 py-3">${sale.price}</td>
                <td class="px-6 py-3">${sale.value}</td>
                <td class="px-6 py-3">
                    <button onclick=" deleteSale(${sale.id} )" class="text-red-600">Excluir</button>
                </td>
            `;
            salesTableBody.appendChild(row);
        });
    }

    window.deleteSale = function(id){
        const sales = JSON.parse(localStorage.getItem('sales')) || [];
        const updatedSales = sales.filter(sale => sale.id !== id);
        localStorage.setItem('sales', JSON.stringify(updatedSales));
        displaySales(); 
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        saveSale(); 
    });

    displaySales();
});
