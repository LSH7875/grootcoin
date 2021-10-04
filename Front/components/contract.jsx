import { useState } from 'react'

const preContractcolor = { "border-bottom": "3px solid rgba(32, 201, 150)", "color": "#333" }
const contractedcolor = { "border-bottom": "3px solid rgba(32, 201, 150)", "color": "#333" }

const PreContract = () => {

    return (
        <div>
            ddd
        </div>
    )
}

const Contracted = () =>{

    return (
        <div>
            zzzz
        </div>
    )
}

const contract = () =>{
    const [contract,setContract] = useState(false)

    const preContract = () =>{
        setContract(false)
    }

    const contracted = () =>{
        setContract(true)
    }
    return(
        <div id="contractBox">
            <div>
                <button style={(contract === false )? preContractcolor : {}} onClick={preContract} className="preContract">미체결 주문</button>
                <button style={(contract === true )? contractedcolor : {}} onClick={contracted} className="contracted">체결내역</button>
            </div>
            {
                contract === false
                    ? <PreContract />
                    : <Contracted />
            }

        </div>
    )
}

export default contract