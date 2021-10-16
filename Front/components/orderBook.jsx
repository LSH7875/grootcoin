import React,{ useState, useRef, useEffect, useContext } from 'react'
import Store from '../store/context'
const orderBook = () =>{
    let [pre_order_data,setpre_order_data] = useState([]);
    const {state,dispatch} = useContext(Store)
    const [order,setOrder] = useState([]);
    const [socket, setSocket] = useState(false);
    const ws = useRef(null);
    const [buy, setBuy] = useState([])
    const [sell, setSell] = useState([])
    useEffect(() => {
        
        ws.current= new WebSocket('ws://127.0.0.1:8080');
        ws.current.onopen=()=>{
            setSocket(true)
        }
        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(()=>{
        
            ws.current.onmessage=e=>{
                dispatch({type:"orderbook",payload:JSON.parse(e.data).orderbook})
                setpre_order_data(JSON.parse(e.data).orderbook.order);
                setOrder(JSON.parse(e.data).orderbook.order);
                setBuy(JSON.parse(e.data).orderbook.buy[0]);
                setSell(JSON.parse(e.data).orderbook.sell[0]);

        }
    },[socket])

    return(
        <div id="orderBookBox">
            <table>
                <thead className="fixedHeader">
                    <div className="float_left order_1">가격</div>
                    <div className="float_left order_2">수량</div>
                </thead>
                <tbody>
                <div>
                    {state.orderbook.map((v,k)=>{
                        return(
                            state.currentPrice>=v.price?
                            <>
                            <div key={k}>
                            <div className = "float_left order_1">
                                <div className="order-2" style={{color:"blue",BackgroundColor:"lightblue"}}>{v.price}</div>
                            </div>
                            <div className = "float_left order_2">
                                 <div className="order-2" style={{color:"blue"}}>{v.rest}</div>
                            </div>
                            </div>
                            </>
                            :
                            <>
                            <div key={k}>
                            <div className = "float_left order_1">
                                <div className="order-2" style={{color:"red"}}>{v.price}</div>
                            </div>
                            <div className = "float_left order_2">
                                 <div className="order-2" style={{color:"red"}}>{v.rest}</div>
                            </div>
                            </div>
                            </>
                        )})}
                </div>
                </tbody>              
            </table>
            <ul>
                <li style={{color:"blue"}}>매도 잔량</li>
                <li style={{color:"blue"}}>{state.buyQty}</li>
            </ul>
            <ul>
                <li style={{color:"red"}}>매수 잔량</li>
                <li style={{color:"red"}}>{state.sellQty}</li>
            </ul>
        </div>
    )
}

export default orderBook