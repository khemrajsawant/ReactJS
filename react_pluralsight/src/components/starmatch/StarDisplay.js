import React from 'react'
import {utils} from './Utils'

const StarDisplay = (props) => {

    return(
        <>
    {utils.range(1,props.count).map(starId=>
        <div key={starId} className="star"></div>
        )}
        </>
    )
}

export default StarDisplay