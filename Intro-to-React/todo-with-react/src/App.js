// To build Todos we would need not 1 but 2 states, One to hold all todos, one to hold new to do input. lets create them.
import Button from "./components/Button";
// We need to import this to use state inside a function/component in React
import {useState} from "react";

const App = () => {
    // Creating a state to hold the todos.
    const [todos, setTodo] = useState([{id: 1, name: 'initial todo'}]);
    const [todoInput, setTodoInput] = useState([]);
    // Observe that in this case the data/state is JS data rather than in HTML. This makes access and manipulation faster in react.

    return (
        <div>
            <h1>
                Hello From react
            </h1>
            {/*Lets also add an Input element to hold the input value*/}
            <input type="text"/>
            <Button/>
        </div>
    )
}
export default App;
