
let todoList = JSON.parse(localStorage.getItem('todoList'));

if (todoList == null) {
    todoList = [];
}

displayTodo();
document.querySelector('.js-todo-add-button').addEventListener('click', () => {
    todoAdd();
})

function todoAdd() {
    const name = document.querySelector('.todo-name').value;
    const date = document.querySelector('.todo-date').value;
    if (name === '' || date === '') {
        alert('Make sure you input correctly idiot!');
        return;
    }
    todoList.push(
        { name, date }
    );

    displayTodo();
}

function displayTodo() {
    let todos = '';
    todoList.forEach((element, i) => {
        const todo = element;
        todos += `<div class="todo-name">${todo.name}</div> <div class="todo-date">${todo.date}</div><button class="todo-delete-button2 js-todo-delete-button" >Delete</button>`
    })

    document.querySelector('.todo-grid').innerHTML = todos;

    document.querySelectorAll('.js-todo-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            displayTodo();
        });
    })

    const save = JSON.stringify(todoList);
    localStorage.setItem('todoList', save)
}