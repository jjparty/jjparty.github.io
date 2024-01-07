const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let ToDos = [];
const TODOS_KEYS = "todos";

function saveToDo() {
    localStorage.setItem(TODOS_KEYS, JSON.stringify(ToDos));
}

function removeLi(event) {
    const li = event.target.parentElement;
    li.remove();
    ToDos = ToDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDo();

}

function handleSubmit(event) {
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: toDoInputValue,
        id: Date.now()
    }
    ToDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo(newTodoObj);
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", removeLi);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEYS);


if (localStorage.getItem("username") !== null) {
    toDoForm.classList.remove(HIDDEN);
    toDoList.classList.remove(HIDDEN);
}

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    ToDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

