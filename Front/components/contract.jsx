import { useState, useEffect } from 'react'

const preContractcolor = { "borderBottom": "3px solid rgba(32, 201, 150)", "color": "#333" }
const contractedcolor = { "borderBottom": "3px solid rgba(32, 201, 150)", "color": "#333" }

const PreContract = () => {
    const [data, setData] = useState([]);
    useEffect(async () => {
        const response = await fetch("http://localhost:3003/api/coin/buy_order");
        const data = await response.json()
        setData(data.data);
        console.log(data.data)
      }, []);

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