// Here Todos component takes list of todos as prop
const Todos = ({todos}) => {
    console.log("todos : " + todos.map((todo) => (todo.id)))
    return (
        <>
            <ul>
                {/*The advantage of JSX is that althoug it looks like HTML it is in fact JS
                Hence we can add logic directly in it. we use `{}` in JSX to specify that we are writing JS */}
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.name}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Todos
