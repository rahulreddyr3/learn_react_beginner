// Once linked the JS in html we can start manipulating the html from JS, like below

// Test thing are working with the `secret hello`.
console.log("Secret Hello");

/////////////////////////// Making Things Interactive With Vanilla JS ///////////////////////////

// The main use of JS is not only to change the elements on fly we also make them interactive.
// This is done by eventListeners in JS

// Let's get the button, title to JS
// const button = document.querySelector(".button")
// const title = document.querySelector(".title")

// Now on ths button we can setup event listeners.
// Event listeners once setup will execute the give function on said action. For Eg:

// button.addEventListener('click', function (){
//     console.log("I am fine Human.");
//     title.innerHTML = "I am fine Human."
//     button.innerHTML = "ok"
// })


// Interesting thing in JS is that we can use the function and then define it below. Still works.
// button.addEventListener('click', onClick)
//
// function onClick() {
//     console.log("I am fine Human.");
//     title.innerHTML = "I am fine Human."
//     button.innerHTML = "ok"
// }
