import Button from "./components/Button";
import {useState} from "react";
import Todos from "./components/todos"

const App = () => {
    const [todos, setTodo] = useState([{id: 1, name: 'initial todo'}]);
    const [todoInput, setTodoInput] = useState([]);

    // Just like on onClick we have seen before we can have an eventListener to listen to changes happening in text element.
    const onChange = (event) => {
        console.log("event changed : " + event.target.value);
        setTodoInput(event.target.value);
    }

    return (
        <div>
            <h1>
                Hello From react
            </h1>
            <Todos todos={todos}/>
            {/*Setting the above created function as the eventListener*/}
            <input type="text" onChange={onChange}/>
            <Button/>
        </div>
    )
}
export default App;
