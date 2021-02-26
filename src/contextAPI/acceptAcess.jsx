import {useContext} from "react";
import MovieProvider from "./creatContexAPI";

const Appply =()=>{
    const value =useContext(MovieProvider)

    return(
        <div>
            {value}
        </div>
    )
}

export default Appply;