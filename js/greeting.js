const LoginForm = document.querySelector("#LoginID");
const LoginInput = document.querySelector("#LoginID input");
const welcomeText = document.querySelector("#welcomeText");
const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function submitClicked(event) {
    event.preventDefault();
    const typedUsername = LoginInput.value;
    localStorage.setItem("username", typedUsername);
    LoginForm.classList.add(HIDDEN);
    paintGreetings(typedUsername);
    toDoForm.classList.remove(HIDDEN);
    toDoList.classList.remove(HIDDEN);
}

function paintGreetings(username) {
    welcomeText.classList.remove(HIDDEN);
    welcomeText.innerText = `Hello ${username}!`;
}

if (localStorage.getItem(USERNAME_KEY) === null) {
    LoginForm.classList.remove(HIDDEN);
} else {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    paintGreetings(savedUsername);
}


LoginForm.addEventListener("submit", submitClicked);