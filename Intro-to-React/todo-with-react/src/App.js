import Button from "./components/Button";
import {useState} from "react";
import Todos from "./components/todos"

const App = () => {
    const [todos, setTodo] = useState([{id: 1, name: 'initial todo'}]);
    const [todoInput, setTodoInput] = useState([]);

    const onChange = (event) => {
        console.log("event changed : " + event.target.value);
        setTodoInput(event.target.value);
    }

    // To be able to add to todos we need eventListener on Button.
    // The advantage of having components is that we can have same button at multiple places
    // and As behaviour of the button is passed to it, we can use the same component
    // and make it behave differently by passing different eventHandlers as a prop.
    // We don't need to do this for this small app. But lets do it any way.

    // Let create a onClick function. And change the Button to take the function as prop.
    const onClick = () => {
        // Lets verify things are working
        console.log("Button got clicked")

        // Now that we know things are working, lets update the button click to add this to todos.
        // For this we first need to generate a unique id for the new to do.
        // React uses this id to intelligently identify which states changed and hence renders only them.
        // For now we can generate a random Id
        const id = Math.floor(Math.random() * 10000) + 2;
        // Create a new to do
        const newTodo = {id: id, name: todoInput};
        // Add the new to do to the state
        setTodo([...todos, newTodo]);
    }

    return (
        <div>
            <h1>
                Hello From react
            </h1>
            <Todos todos={todos}/>
            <input type="text" onChange={onChange}/>
            <Button onClick={onClick}/>
        </div>
    )
}
export default App;

// Yes this also adds empty as a new to do. But that is not important.
// Note that we haven't asked react to render the new to do anywhere. That is the advantage of react.
// Since we are using the state to render todos and there is a change in state,
// react automatically figured it needs to render the new to do.
