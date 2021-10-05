import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';

const buycolor = { "background": "rgba(225,35,67)", "color": "#fff" }
const sellcolor = { "background": "rgba(23,99,182)", "color": "#fff" }


const Buy = () => {
    const [buyPrice,setBuyPrice] = useState(0)
    const [volume,setVolume] = useState(0)
    const [login,setlogin] = useState(false)
    const [data, setData] = useState([]);

    const buyApi = () =>{
        axios.post("http://localhost:3003/api/coin/buy_order", {
            userid: "da",
            price: buyPrice,
            qty: volume,
            ordertype: 0,
            rest: volume,
            coin_id: 1
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
    
    const priceUp = () =>{
        setBuyPrice((price)=>price+1)
    }

    const priceDown =  ()=>{
        setBuyPrice((price)=>price>0 ? price-1 : 0)
    }

    const volumeUp = () =>{
        setVolume((volume)=>volume+1)
    }

    const volumeDown =  ()=>{
        setVolume((volume)=>volume>0 ? volume-1 : 0)
    }


    return (
        <div>
            <ul className="flex">
                <li>보유</li>
                <li>0 KRW</li>
            </ul>
            <ul className="flex">
                <li>매수 가능</li>
                <li>0 KRW</li>
            </ul>
            <div className="priceBox">
                <h6>가격(KRW)</h6>
                <ul className="coinPrice">
                    <li>{buyPrice}</li>
                    <li>
                        <ul className="plusMinus">
                            <li><button onClick={priceDown}>-</button></li>
                            <li><button onClick={priceUp}>+</button></li>
                        </ul>
                    </li>         
                </ul>   
            </div>
            <div className="priceBox">
                <h6>수량(GRT)</h6>
                <ul className="coinPrice">
                    <li>{volume}</li>
                    <li>
                        <ul className="plusMinus">
                            <li><button onClick={volumeDown}>-</button></li>
                            <li><button onClick={volumeUp}>+</button></li>
                        </ul>
                    </li>         
                </ul>   
            </div>
            <ul className="flex">
                <li>주문 금액</li>
                <li>0 KRW</li>
            </ul>
            <ul className="flex">
                <li>매수 수량</li>
                <li>0 GRT</li>
            </ul>
            {/* <Link href={login == false ? `/login`:`/login`}> */}
                <button onClick={buyApi} className="buy Btn2">
                    {login == false ? "로그인":"매수"}
                </button>
            {/* </Link> */}
        </div>
    )
}

const Sell = () =>{
    const [sellPrice,setSellPrice] = useState(0)
    const [volume,setVolume] = useState(0)
    const [login,setlogin] = useState(false)

    const sellApi = () =>{
        axios.post("http://localhost:3003/api/coin/buy_order", {
            userid: "do",
            price: sellPrice,
            qty: volume,
            ordertype: 1,
            rest: volume,
            coin_id: 1
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

    const onUp = () =>{
        setSellPrice((price)=>price+1)
    }

    const onDown =  ()=>{
        setSellPrice((price)=>price>0 ? price-1 : 0)
    }

    const volumeUp = () =>{
        setVolume((volume)=>volume+1)
    }

    const volumeDown =  ()=>{
        setVolume((volume)=>volume>0 ? volume-1 : 0)
    }


    return (
        <div>
            <ul className="flex">
                <li>보유</li>
                <li>0 GRT</li>
            </ul>
            <ul className="flex">
                <li>매도 가능</li>
                <li>0 GRT</li>
            </ul>
            <div className="priceBox">
                <h6>가격(KRW)</h6>
                <ul className="coinPrice">
                    <li>{sellPrice}</li>
                    <li>
                        <ul className="plusMinus">
                            <li><button onClick={onDown}>-</button></li>
                            <li><button onClick={onUp}>+</button></li>
                        </ul>
                    </li>         
                </ul>   
            </div>
            <div className="priceBox">
                <h6>수량(GRT)</h6>
                <ul className="coinPrice">
                    <li>{volume}</li>
                    <li>
                        <ul className="plusMinus">
                            <li><button onClick={volumeDown}>-</button></li>
                            <li><button onClick={volumeUp}>+</button></li>
                        </ul>
                    </li>         
                </ul>   
            </div>
            <ul className="flex">
                <li>주문 금액</li>
                <li>0 KRW</li>
            </ul>
            <ul className="flex">
                <li>매도 금액</li>
                <li>0 KRW</li>
            </ul>
            {/* <Link href={login == false ? `/login`:`/login`}> */}
            <button onClick={sellApi} className="sell Btn2">
                    {login == false ? "로그인":"매수"}
                </button>
            {/* </Link> */}
        </div>
    )
}

const buyAndSell = ()=>{
    const [bsBtn, setbsBtn] = useState('buy')

    const buy = () =>{
        setbsBtn('buy')
    }

    const sell = () =>{
        setbsBtn('sell')
    }

    return(
        <div id="buyAndSellBox">
            <div>
                <button style={(bsBtn === 'buy')? buycolor : {}} onClick={buy} className="buyBtn">매수</button>
                <button style={(bsBtn === 'sell')? sellcolor : {}} onClick={sell} className="sellBtn">매도</button>
            </div>
            {
                bsBtn === 'buy'
                    ? <Buy />
                    : <Sell />
            }
        </div>
    )
}

export default buyAndSell