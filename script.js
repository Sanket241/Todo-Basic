
let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('addBtn');
let todoList = document.getElementById('todoList');

addBtn.addEventListener('click',addTodo);
function addTodo(){
    const todotext=todoInput.value
    const listitem=document.createElement('li');
    listitem.innerHTML=todotext;
todoList.appendChild(listitem);
todoInput.value="";
}