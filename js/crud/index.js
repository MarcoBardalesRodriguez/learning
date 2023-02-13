
document.addEventListener('DOMContentLoaded', () =>{
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const table = document.getElementById('table');
  const alert = document.getElementById('alert');

  const btn = document.getElementById('add');

  let id = 0;

  function removeTodo(id) {
    document.getElementById(id).remove();
  }


  function addTodo() {
    if(title.value === '' || description.value === '') {
      let message = 'Title and Description are required';
      alert.classList.remove('d-none');
      alert.innerText = message;
      return;
    }
    alert.classList.add('d-none');
    const row = table.insertRow();
    row.setAttribute('id',id++);

    row.innerHTML = `
      <td>${title.value}</td>
      <td>${description.value}</td>
      <td class="text-center">
	<input type="checkbox">
      </td>
      <td class="text-right">
      </td>
    `;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');
    removeBtn.innerHTML = `<i class="fa fa-trash"></i>`; 

    const editBtn = document.createElement('button');
    editBtn.classList.add('btn','btn-primary','mb-1');
    editBtn.innerHTML = `<i class="fa fa-pencil"></i>`;

    removeBtn.onclick = (e) => {
      removeTodo(row.getAttribute('id'));
    }

    row.children[3].appendChild(editBtn);
    row.children[3].appendChild(removeBtn);

  }

  btn.onclick = addTodo;

})


