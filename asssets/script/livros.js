window.onload = function() {
    let tbody = document.querySelector('#table-book tbody')

    for(let i = 0; i < 9; i++){
        var tr = document.createElement('tr');

        var th = document.createElement('th');
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
    
        editar.classList.add('btn-class-action')
        excluir.classList.add('btn-class-action')
        editar.textContent = "editar"
        excluir.textContent = "excluir"
    
        td6.appendChild(editar)
        td6.appendChild(excluir)
        tr.append(td6)
    
        tbody.appendChild(tr);
    }

  
  };