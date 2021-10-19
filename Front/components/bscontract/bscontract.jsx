import {useState} from 'react'
import BuyAndSell from "./contractComponet/buyAndSell"
import Contract from "./contractComponet/contract"


const BsContract = (props)=>{

    const [tabBtn, setTabBtn] = useState(2)


    const btn1 = () => {
        setTabBtn(1)
        console.log(`원래 함수에서${tabBtn}`)
    }

    const btn2 = () => {
        setTabBtn(2)
        console.log(`원래 함수에서${tabBtn}`)
    }

    return(
        <>
            <BuyAndSell onClick = {btn1} tabBtn = {tabBtn} setTabBtn = {setTabBtn}/>
            <Contract onClick = {btn2} tabBtn = {tabBtn} setTabBtn = {setTabBtn}/>
        </>
    )
}

export default BsContract