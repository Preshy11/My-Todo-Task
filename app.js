const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    addTodo();
});

function addTodo(todo){
    let todoText = input.value;
    if (todo) {
        todoText = todo.text;
    }
    //console.log(todoText)
    //Build lis
    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
            
        }
        todoEl.innerText = todoText;

    //Mark as completed
     todoEl.addEventListener("click", ()=> {
        todoEl.classList.toggle("completed");
     });

     //Delete
     todoEl.addEventListener("contextmenu", (e) => {
         e.preventDefault();
         todoEl.remove();
     });

        //Add it to the DOM
        todos.appendChild(todoEl);
        input.value = " ";
    }
}