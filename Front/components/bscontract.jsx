import {useState} from 'react'
import BuyAndSell from "./buyAndSell"
import Contract from "./contract"


const BsContract =  ()=>{

    const [bsState,setBsState] = useState(1)

    return(
        <>
            <BuyAndSell bsState_Value = {bsState}/>
            <Contract bsState_Value = {bsState}/>
        </>
    )
}

export default BsContract