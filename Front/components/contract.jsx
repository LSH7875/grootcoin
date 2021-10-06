import { useState, useEffect } from 'react'
import axios from 'axios';

const preContractcolor = { "borderBottom": "3px solid rgba(32, 201, 150)", "color": "#333" }
const contractedcolor = { "borderBottom": "3px solid rgba(32, 201, 150)", "color": "#333" }

const PreContract = () => {

    const [content, setContent] = useState()

    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("ws://127.0.0.1:8080");
        ws.current.onopen = () => console.log();
        ws.current.onclose = () => console.log();

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(() => {
        ws.current.onmessage = (e) => setContent(e.data.replace('[','').replace(']','').split(','))
    }, []);

    return (
        <div id="PreContractBox">
            <ul id="PreContractType">
                <li>매수 주문</li>
                <li>3800 KRW</li>
            </ul>
            <ul id="PreContractQty">
                <li>주문수량</li>
                <li>주문잔량</li>
                <li>주문일시</li>
            </ul>
            <ul id="PreContractQty2">
                <li>10 GRT</li>
                <li>10 GRT</li>
                <li>2021.10.06 11:40</li>
            </ul>
        </div>
    )
}

const Contracted = () =>{
    const [data, setData] = useState([]);
    useEffect(async () => {
        const response = await fetch("http://localhost:3003/api/coin/serch_deal",{ 
            method: "POST",
            headers: {
            'Content-type': 'application/json'
        }, 
            body: JSON.stringify({
            userid: "do"
          })
        });
        const data = await response.json()
        setData(data.deal);
        console.log(data.deal)
      }, []);

    const contractedData = data.map((v,k)=>{
        const timestamp = 1633419798
        const date = new Date(timestamp*1000)
        const year = date.getFullYear().toString().slice(-4)
        const month = ("0" + (date.getMonth() +1 )).slice(-2)
        const day = ("0" + (date.getDate() +1 )).slice(-2)
        const hour = ("0" + (date.getHours() +1 )).slice(-2)
        const minute = ("0" + (date.getMinutes() +1 )).slice(-2)
        console.log(year,month,day,hour,minute)
        return(
            <div id="ContractedBox" key={k}>
                {v.ordertype == 0 ? 
                    <div className="ContractedPrice contractedb">Buy {v.price}</div>
                    :<div className="ContractedPrice contracteds">Sell {v.price}</div>
                }
                
                <ul id="ContractedQty">
                    <li>체결 수량</li>
                    <li>체결 일시</li>
                </ul>
                <ul id="ContractedQty2">
                    <li>{v.qty} GRT</li>
                    <li>{year}.{month}.{day} {hour}:{minute}</li>
                </ul>
            </div>
    )})

    
    return (
        <>
            {contractedData}
        </>
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