import { AFFICHEP, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

export const increment=()=>{
    return(
        {
            type : INCREMENT
        }

    )
}
export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const afficheP=(payload)=> {
    return(
        {
            type : AFFICHEP,
            payload
        }
    )
}
export const handleShow =()=>{
    return(
        {
            type : HANDLESHOW
        }
    )
}