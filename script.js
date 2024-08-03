document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
  
    // Função para adicionar um item à lista
    const addItem = (itemText) => {
      const li = document.createElement('li');
  
      const span = document.createElement('span');
      span.className = 'item-text';
      span.textContent = itemText;
  
      const editButton = document.createElement('button');
      editButton.className = 'edit';
      editButton.innerHTML = '&#9998;';
      editButton.addEventListener('click', () => editItem(span));
  
      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete';
      deleteButton.innerHTML = '&#10006;';
      deleteButton.addEventListener('click', () => deleteItem(li));
  
      li.appendChild(span);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
  
      itemList.appendChild(li);
    };
  
    // Função para editar um item
    const editItem = (itemSpan) => {
      const newText = prompt('Editar item:', itemSpan.textContent);
      if (newText !== null && newText.trim() !== '') {
        itemSpan.textContent = newText.trim();
      }
    };
  
    // Função para deletar um item
    const deleteItem = (itemLi) => {
      if (confirm('Tem certeza que deseja deletar este item?')) {
        itemList.removeChild(itemLi);
      }
    };
  
    // Evento de submissão do formulário
    itemForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const newItem = itemInput.value.trim();
      if (newItem !== '') {
        addItem(newItem);
        itemInput.value = '';
        itemInput.focus();
      }
    });
  });
  