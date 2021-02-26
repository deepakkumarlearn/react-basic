import React from 'react'
import "./exterCSS.css";
import style from "./AppStyle.module.css";

function useCSS({choice}) {

    const colorChange = choice ?"primary":""

    return (
        <div>
            {/* <h1 className="primary">Deepak Kumar Blue exterCSS</h1> */}
            {/* <h1 className={colorChange}>Deepak Kumar conditional</h1> */}

             {/* Multiple css use  */}
            
            <h1 className={`${colorChange} fontSize`}>Deepak Kumar conditional</h1>

        </div>
    )
}

export default useCSS
