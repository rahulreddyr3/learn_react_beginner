import Button from "./components/Button";
import {useState} from "react";
// Importing Todos component
import Todos from "./components/todos"

const App = () => {
    const [todos, setTodo] = useState([{id: 1, name: 'initial todo'}]);
    const [todoInput, setTodoInput] = useState([]);

    return (
        <div>
            <h1>
                Hello From react
            </h1>
            {/* To render the state we can simply pass the state as a prop*/}
            <Todos todos={todos}/>
            <input type="text"/>
            <Button/>
        </div>
    )
}
export default App;
