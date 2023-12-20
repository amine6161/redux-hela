import { useDispatch, useSelector } from "react-redux"
import { afficheP, decrement, increment } from "../Redux/Actions"
import { useState } from "react"

const Counter = ()=>{
    const count = useSelector(state=>state.count)
    const textP  =useSelector(state=>state.textP)
    const dispatch = useDispatch()
    const [showMore, setShowMore] = useState(false)
    return(
        <div>
            <h2>Components Counter</h2>
            <button onClick={()=> count > 0 && dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(increment())}>+</button>
            <br/><br/><br/>
            <input type="text" onChange={(e)=>dispatch(afficheP(e.target.value))}/> 
            <h3>{showMore ? textP : textP.substring(0, 10)}</h3>
            {textP.length > 10 && <button onClick={()=> setShowMore(!showMore)}>{showMore ?   "Show Less": "Show More"}</button>}


        </div>
    )
}
export default Counter