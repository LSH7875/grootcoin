import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Store from '../store/context'

const preContractcolor = { "borderBottom": "3px solid rgba(32, 201, 150)", "color": "#333" }
const contractedcolor = { "borderBottom": "3px solid rgba(32, 201, 150)", "color": "#333" }

const PreContract = (props) => {
    // const [data, setData] = useState([]);
    const [cancle, setCancle] = useState(0)
    const {state,dispatch} = useContext(Store)

    // if(bsState change){
    //     const Change = e => {

    //         const response = await fetch("http://localhost:3003/api/coin/contract",{ 
    //         method: "POST",
    //         headers: {
    //         'Content-type': 'application/json'
    //     }, 
    //         body: JSON.stringify({
    //         userid: state.userid,
    //         id:"0"
    //       })
    //     });
    //     const data = await response.json()
    //     dispatch({ type: 'precontract', preContractArr:data.data})

    //     }
    // }

    useEffect(async () => {
        const response = await fetch("http://localhost:3003/api/coin/contract",{ 
            method: "POST",
            headers: {
            'Content-type': 'application/json'
        }, 
            body: JSON.stringify({
            userid: state.userid,
            id:"0"
          })
        });
        const data = await response.json()
        dispatch({ type: 'precontract', preContractArr:data.data})
        }, []);

    let preContractData = state.precontract.map((v,k)=>{
        const timestamp = v.time
        const date = new Date(timestamp*1000)
        const year = date.getFullYear().toString().slice(-4)
        const month = ("0" + (date.getMonth() +1 )).slice(-2)
        const day = ("0" + (date.getDate() +1 )).slice(-2)
        const hour = ("0" + (date.getHours() +1 )).slice(-2)
        const minute = ("0" + (date.getMinutes() +1 )).slice(-2)

        const DeleteApi = () =>{
            setCancle(cancle+1)
            axios.post("http://localhost:3003/api/coin/coin_cancle", {
                pk:v.pk
            },{ 
                headers:{ 
                'Content-type': 'application/json', 
                'Accept': 'application/json' 
                } 
            })
            .then((response)=>console.log(response))
            .catch(error => {
                console.log('실패났음',error)
            })
        }
        
        return(
                <div id="PreContractBox" key={k}>
                    {v.ordertype == 0 ? 
                        <ul className="PreContractType contractedb">
                            <li>매수 주문</li>
                            <li>{v.price} KRW</li>
                        </ul>
                        :                        
                        <ul className="PreContractType contracteds">
                            <li>매도 주문</li>
                            <li>{v.price} KRW</li>
                        </ul>
                    }
                    <ul id="PreContractQty">
                        <li>주문수량</li>
                        <li>주문잔량</li>
                        <li>주문일시</li>
                    </ul>
                    <ul id="PreContractQty2">
                        <li>{v.qty} GRT</li>
                        <li>{v.rest} GRT</li>
                        <li>{year}.{month}.{day} {hour}:{minute}</li>
                    </ul>
                    <ul>
                        <li><a onClick={DeleteApi}>X</a></li>
                    </ul>
            </div>
        )})
        return (
            <>
                {preContractData}
            </>

        )

}

const Contracted = () =>{
    const [data, setData] = useState([]);
    const {state,dispatch} = useContext(Store)
    useEffect(async () => {
        const response = await fetch("http://localhost:3003/api/coin/search_deal",{ 
            method: "POST",
            headers: {
            'Content-type': 'application/json'
        }, 
            body: JSON.stringify({
            userid: state.userid,
            id:"1"
          })
        });
        const data = await response.json()
        setData(data.deal);
        console.log(data.deal)
      }, []);

    const contractedData = data.map((v,k)=>{
        const timestamp = v.time
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
        <>
            <div id="contractBox">
                <div className="fixedHeader2">
                    <button style={(contract === false )? preContractcolor : {}} onClick={preContract} className="preContract">미체결 주문</button>
                    <button style={(contract === true )? contractedcolor : {}} onClick={contracted} className="contracted">체결내역</button>
                </div>
                {
                    contract === false
                        ? <PreContract />
                        : <Contracted />
                }

            </div>
        </>
    )
}

export default contract