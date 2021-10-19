import { useEffect, useState, useContext, Component} from 'react'
import Link from 'next/link'
import axios from 'axios';
import Store from '../../../store/context'

const buycolor = { "background": "rgba(225,35,67)", "color": "#fff" }
const sellcolor = { "background": "rgba(23,99,182)", "color": "#fff" }

const Buy = (props) => {
    const [buyPrice,setBuyPrice] = useState(0)
    const [volume,setVolume] = useState(0)
    const {state,dispatch} = useContext(Store)

    const onChange = e => {
        setBuyPrice(e.target.value)
    }

    const onChange2 = e => {
        setVolume(e.target.value)
    }

    const updateOrder = ()=>{
        props.newSet()
    }

    const updateOrder2 = ()=>{
        props.newSet2()
    }

    const updateBuy = ()=>{
        buyApi()
        updateOrder()
        updateOrder2()
    }

    const buyApi = () =>{
        axios.post("http://localhost:3003/api/coin/buy_order", {
            userid: state.userid,
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
        setBuyPrice(0)
        setVolume(0)
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
                    <li><input type="number" value={buyPrice} onChange={onChange} /></li>
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
                    <li><input type="number" value={volume} onChange={onChange2} /></li>
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
                <li>{buyPrice*volume} KRW</li>
            </ul>
            <ul className="flex">
                <li>매수 금액</li>
                <li>{volume} GRT</li>
            </ul>
            { state.login_boolean === 0 ? 
                <Link href={`/login`}>
                    <button className="buy Btn2">
                        로그인
                    </button>
                </Link>
                : 
                    <button onClick={updateBuy} className="buy Btn2">
                        매수
                    </button>
            }
        </div>
    )
}

const Sell = (props) =>{
    const [sellPrice,setSellPrice] = useState(0)
    const [volume,setVolume] = useState(0)
    const {state,dispatch} = useContext(Store)

    const onChange = e => {
        setSellPrice(e.target.value)
    }

    const onChange2 = e => {
        setVolume(e.target.value)
    }

    const updateOrder = ()=>{
        props.newSet()
    }

    const updateOrder2 = ()=>{
        props.newSet2()
    }

    const updateSell = ()=>{
        sellApi()
        updateOrder()
        updateOrder2()
    }

    const sellApi = () =>{
        axios.post("http://localhost:3003/api/coin/sell_order", {
            userid: state.userid,
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
        setSellPrice(0)
        setVolume(0)
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
                    <li><input type="number" value={sellPrice} onChange={onChange} /></li>
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
                    <li><input type="number" value={volume} onChange={onChange2} /></li>
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
                <li>{sellPrice*volume} KRW</li>
            </ul>
            <ul className="flex">
                <li>매도 금액</li>
                <li>{volume} KRW</li>
            </ul>
            { state.login_boolean === 0 ? 
                <Link href={`/login`}>
                    <button className="sell Btn2">
                        로그인
                    </button>
                </Link>
                : 
                    <button onClick={updateSell} className="sell Btn2">
                        매도
                    </button>
            }
        </div>
    )
}

const buyAndSell = (props)=>{
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
                        ? <Buy newSet={props.newSet} newSet2={props.newSet2}/>
                        : <Sell newSet={props.newSet} newSet2={props.newSet2}/>
                }
            </div>
    )
}

export default buyAndSell