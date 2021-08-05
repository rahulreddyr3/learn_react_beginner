// Once linked the JS in html we can start manipulating the html from JS, like below

// Test thing are working with the `secret hello`.
console.log("Secret Hello");

/////////////////////////// DOM Manipulation With Vanilla JS ///////////////////////////

// To access the elements from html we can select them by the class name. (Note: There many other methods to do this. This felt easy)
const title = document.querySelector(".title")

// Once we have the element we can change it in JS and this will get reflected in the page.
// title.style.color = "green";
// title.style.backgroundColor = "red";

// For JS we can also change the class of an element to apply styling.
// For this create the class in a css file.
// Link the css to Html with `<link rel="stylesheet" href="style.css"/>`

// title.classList.add("change")
