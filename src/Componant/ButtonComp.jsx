import React from 'react'

const ButtonComp = ({ background, color, content }) => {

    return (
        <>
            <button style={{ backgroundColor: background, color: color }}>{content}</button>
        </>
    )
}

export default ButtonComp