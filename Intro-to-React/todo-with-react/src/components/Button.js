// Lets go through the component line by line

// lets ignore this for now.
import PropTypes from 'prop-types'

// Here in JS terms we are creating a function and assigning it to Button. This is how we create a component in React.
// Every component takes arguments, we call them props in React.
// Here we took props, destructed them to get `text` prop from them.
const Button = ({text}) => {
    // below we are returning a button. The code looks like HTML but it is call JSX.
    // There are some differences like we use `className` instead of normal `class`
    // React reads this JSX and constructs the corresponding HTML and CSS
    return(
        <button className='add-todo'>{text}</button>
    )
}

// In every component which takes props we can add default props as below
Button.defaultProps = {
    text: 'Add ToDo'
}

// We can use PropTypes which we imported, to validate the types of props when required, since JS is dynamically typed.
Button.protoTypes = {
    text: PropTypes.string
}

// Finally we are exporting thr component so that we can use it other places inside JSX.
export default Button
