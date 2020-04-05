import React from 'react'
import './styleStarMatch.css'
const PlayAgain = (props) =>{

    return (<div className = 'game-done'><button onClick={props.onClick}>PlayAgain</button></div>)
}

export default PlayAgain