
let todoList = JSON.parse(localStorage.getItem('todoList'));
if (todoList == null) {
    todoList = [];
}

displayTodo();

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
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        todos += `<div class="todo-name">${todo.name}</div> <div class="todo-date">${todo.date}</div><button class="todo-delete-button2" onclick="
            todoList.splice(${i},1);
            displayTodo();
        ">Delete</button>`
    }
    document.querySelector('.todo-grid').innerHTML = todos;
    const save = JSON.stringify(todoList);
    localStorage.setItem('todoList', save)
}