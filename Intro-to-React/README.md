# Basic Intro to React

### Why React Recap:

* Apart from the benefits of code structure and logic segregation we discussed, react also has benefits of
* The Dom manipulation with vanilla JS is very slow and to do anything in vanilla JS we need to do DOM manipulations.
* The Data in vanilla JS is all in HTMl, when every we want to know the state of an element we need to reach to HTML and pull the element, this is slow. Whereas in react the data/state is JS data. This make things very fast.
* Easy component re-usability.

### How to do React
* In this we will see how to do the same thing we did before with react.

** Note: ** Not covering installation

* We can create a basic react app just by one command

```shell
npx create-react-app project-name
```
* This command does a lot of thing to set up react. Will to through how react works and what this setup does in next part.
* After this, we should be able to start server by
```shell
npm start
```

### So, What is happening?
* As discussed before, with everything is created to Js, But we do still need an html file to render the components, This is the `index.html` in public.
* This `index.html` file all empty, but a single div call `root`.
* For our Js we render everything to this single div.
* In `index.js` you can see that we are accessing the `root` and rendering `App` to it.
    * This all the interaction we are going to do with html directly in react.
* Where do we get this `App` from you ask? It is from `App.js`
* The `App` is the basic component in react. This represents the entire page for us.
* Every other component we create, we will render them to `App` component.
* As you might have guessed, this works for single page website/app, but how can we have multiple page apps when we are rendering everything same app component?
    * The answer is `react-router` which allows us to render multiple pages from the `App` component itself based on `url`.

### Let's build todo again
* First Lets clean `App.js`
* Now that we have the App running lets re-create the to do part we did before. Let create some components for this in `components`.
  * First let's create a `Button` component and add it to `App`.
