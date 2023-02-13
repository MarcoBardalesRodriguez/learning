
export default class Model {
  constructor() {
    this.view = null;
    this.todos = JSON.parse(localStorage.getItem('todos'));
    if(!this.todos || this.todos.length < 1) {
      this.todos = [
	{
	  id: 0,
	  title: 'Item 01',
	  description: 'Test item',
	  completed: false,
	}
      ]
      this.currentId = 1;
    }else{
      this.currentId = this.todos[this.todos.length - 1].id + 1;
    }
  }

  setView(view) {
    this.view = view;
  }    

  getTodos() {
    return this.todos;
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(title, description){
    const todo = {
      id: this.currentId++,
      title,
      description,
      completed: false,
    }

    this.todos.push(todo);
    this.save();

    console.log(this.todos);

    return {...todo};
  }

  findTodo(id) {
    return this.todos.findIndex((todo) => todo.id == id);
  }

  editTodo(id,values){
    const index = this.findTodo(id);
    let todo = this.todos[index];
    Object.assign(todo, {...values});
    this.save();
  }

  toggleCompleted(id) {
    const index = this.findTodo(id);
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    console.log(this.todos);
    this.save();
  }

  removeTodo(id) {
    const index = this.findTodo(id);
    this.todos.splice(index,1);
    this.save();
  }
}
