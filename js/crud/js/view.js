import AddTodo from "./components/add-todo.js";
import Modal from "./components/modal.js";
import Filters from "./components/filter.js";

export default class View {
  constructor() {
    this.model = null;
    this.table = document.getElementById('table');

    this.addTodoForm = new AddTodo();
    this.modal = new Modal();
    this.filters = new Filters();

    this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
    this.modal.onClick((id, values) => this.editTodo(id,values));
    this.filters.onClick((filters) => this.filter(filters));
  }

  setModel(model) {
    this.model = model;
  }

  toggleCompleted(id) {
    this.model.toggleCompleted(id);
  }

  removeTodo(id) {
    this.model.removeTodo(id);
    document.getElementById(id).remove();
  }

  createRow(todo) {
    const row = this.table.insertRow();
    row.setAttribute('id', todo.id);

    row.innerHTML = `
      <td>${todo.title}</td>
      <td>${todo.description}</td>
      <td class="text-center">
	<!--checkbox-->
      </td>
      <td class="text-right">
	<!--editBtn-->
	<!--removeBtn-->
      </td>
    `;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    checkbox.onclick = () => this.toggleCompleted(todo.id);

    const editBtn = document.createElement('button');
    editBtn.classList.add('btn','btn-primary','mb-1');
    editBtn.innerHTML = `<i class="fa fa-pencil"></i>`;
    editBtn.setAttribute('data-toggle', 'modal');
    editBtn.setAttribute('data-target', '#modal');

    editBtn.onclick = () => {
      const todos = this.model.getTodos();
      const index = this.model.findTodo(todo.id);
      const storedTodo = todos[index];
      //console.log(todo);
      //console.log(storedTodo);
      this.modal.setValues(storedTodo);
    }

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');
    removeBtn.innerHTML = `<i class="fa fa-trash"></i>`; 

    removeBtn.onclick = () => {
      this.removeTodo(todo.id);
    }

    row.children[2].appendChild(checkbox);
    row.children[3].appendChild(editBtn);
    row.children[3].appendChild(removeBtn);

  }

  updateRow(id,values) {
    const row = document.getElementById(id);
    row.children[0].innerText = values.title;
    row.children[1].innerText = values.description;
    row.children[2].children[0].checked = values.completed;
  }

  addTodo(title, description) {
    const todo = this.model.addTodo(title, description);
    this.createRow(todo);
  }

  editTodo(id,values){
    console.log(id,values);
    this.model.editTodo(id,values);
    this.updateRow(id, values);
  }

  render() {
    const todos = this.model.getTodos();
    todos.forEach((todo) => this.createRow(todo));
  }

  filter(filters) {
    const { type, words } = filters;
    const [, ...rows] = document.getElementsByTagName('tr');

    for (const row of rows) {
      const [title,description,completed] = row.children;
      let shouldHide = false;

      if(words) {
	if(title.innerText.includes(words) || description.innerText.includes(words)){
	  shouldHide = false;
	}else{
	  shouldHide = true;
	}
	//shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
      }

      const shouldBeCompleted = type === 'completed';
      const isCompleted = completed.children[0].checked;

      if (type !== 'all' && shouldBeCompleted !== isCompleted) {
	shouldHide = true
      }

      if(shouldHide){
	row.classList.add('d-none');
      }else {
	row.classList.remove('d-none');
      }
    }
  }

}
