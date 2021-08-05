import PropTypes from 'prop-types'

// Update the Button component to take a function as prop. Set the onClick of the button to the passed function.
const Button = ({text, onClick}) => {
    return(
        <button
            className='add-todo'
            onClick={onClick}
        >
            {text}
        </button>
    )
}
Button.defaultProps = {
    text: 'Add ToDo'
}
Button.protoTypes = {
    text: PropTypes.string
}
export default Button
