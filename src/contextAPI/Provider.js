import { createMovie } from "./creatContexAPI";

const MovieProvider =(props)=>{
    return(
        <createMovie.Provider value ={"Hi,There"}>
            {props.children}
        </createMovie.Provider>
    )
}

export default MovieProvider;