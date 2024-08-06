import React from 'react'

function ShinyEffect({ left, right, top, size = 500 }) {

    const positionStyles = {
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1
    }

    if (left !== undefined) {
        positionStyles.left = `${left}`
        
    }

    if (right !== undefined) {
        positionStyles.right = `${right}`

    }



    return (
        <div className='shiny-effect' style={positionStyles}>

        </div>
    )
}

export default ShinyEffect
