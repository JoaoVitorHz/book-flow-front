let btnCloseCreateBook = document.querySelector('#btn-close-create-book')
let btnOpenCreateBook = document.querySelector('#btn-open-modal-create-book')

btnCloseCreateBook.addEventListener('click', () => {
    document.querySelector('#div-create-book').setAttribute('style','display: none')
})
btnOpenCreateBook.addEventListener('click', () => {
    document.querySelector('#div-create-book').setAttribute('style','display: flex')
})


window.onload = function() {
    let tbody = document.querySelector('#table-book tbody')

    for(let i = 0; i < 9; i++){
        var tr = document.createElement('tr');
        tr.setAttribute('class', ' border-b bg-gray-800 border-gray-700')

        var th = document.createElement('th');
        th.setAttribute('class', 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white')
        th.setAttribute('scope', 'row');
        th.textContent = '1'; // Conteúdo da célula
        tr.appendChild(th);
    
        var td1 = document.createElement('td');
        td1.textContent = 'Harry Potter';
        tr.appendChild(td1);
    
        var td2 = document.createElement('td');
        td2.textContent = 'Luana';
        tr.appendChild(td2);
    
        var td3 = document.createElement('td');
        td3.textContent = 'Magia';
        tr.appendChild(td3);
    
        var td4 = document.createElement('td');
        td4.textContent = 'R$ 150,00';
        tr.appendChild(td4);
    
        var td5 = document.createElement('td');
        td5.textContent = '21/03/2021';
        tr.appendChild(td5);
    
    
        var td6 = document.createElement('td');
        td6.classList.add('td-class-action')
        var editar = document.createElement('button');
        var excluir = document.createElement('button');
    
        editar.setAttribute('class', 'bg-white text-black px-3 py-2 rounded mx-1')
        excluir.setAttribute('class', 'bg-white text-black px-3 py-2 rounded mx-1')
        editar.textContent = "editar"
        excluir.textContent = "excluir"
    
        td6.appendChild(editar)
        td6.appendChild(excluir)
        tr.append(td6)
    
        tbody.appendChild(tr);
    }

  
  };

