import React from 'react'

function child(props) {
    return (
        <div>
            <p>Child parent</p>
            <button onClick={()=>props.greetParent('Deepak')}>greet Parent</button>
        </div>
    )
}

export default child;
