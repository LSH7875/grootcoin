import {useState} from 'react'
import BuyAndSell from "./buyAndSell"
import Contract from "./contract"


const BsContract =  ()=>{

    const [bsState,setBsState] = useState(1)

    return(
        <>
            <BuyAndSell bsState={String(bsState)} setBsState={setBsState}/>
            <Contract bsState={bsState} setBsState={setBsState}/>
        </>
    )
}

export default BsContract