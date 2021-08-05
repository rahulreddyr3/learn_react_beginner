// Once linked the JS in html we can start manipulating the html from JS, like below

// Test thing are working with the `secret hello`.
console.log("Secret Hello");

/////////////////////////// Now lets do some TO-DO ///////////////////////////
// Not that we have elements in html, lets get them to JS

const addToDo = document.querySelector(".add-todo");
const toDoDisplay = document.querySelector(".todo-display");
const toDoInput = document.querySelector(".todo-input");

// Not that we have everything, Lets start.
addToDo.addEventListener('click', clickedAddToDo);

function clickedAddToDo() {
    console.log("Add ToDo button clicked");
    // Now we need to add what ever is present in the input to the existing list
    // So first create a new element to add to list
    const newToDo = document.createElement("LI");
    // Get the value from the input. This will be empty if nothing is there in the input.
    console.log(toDoInput.value)
    // Now create content for the li
    const newTodoContent = document.createTextNode(toDoInput.value)
    // Add content to the new todo
    newToDo.appendChild(newTodoContent)
    // Now add new to do to the list
    toDoDisplay.appendChild(newToDo)
    // Ok, It also adds empty To Do's.
}

// Similarly we can build the update and delete functons.
