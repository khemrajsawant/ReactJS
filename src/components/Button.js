import React from 'react'

const Button = (props) => {

    //const [state, setState] = useState(1)

    //const handleClick =()=> setState(state+1)
    //const [state, setState] = useState(5)

    //const handleClick =()=> setState(state*2)

    const handleClick = () => props.onClickFunction(props.increment)

    return (
    <button onClick={handleClick}>
        +{props.increment}
    </button>    )
}

export default Button