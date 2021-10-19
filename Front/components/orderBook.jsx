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
                
                console.log('받은메세지');
                console.log(JSON.parse(e.data).orderbook)
                dispatch({type:"orderbook",payload:JSON.parse(e.data).orderbook})
                setpre_order_data(JSON.parse(e.data).orderbook.order);
                setOrder(JSON.parse(e.data).orderbook.order);
                setBuy(JSON.parse(e.data).orderbook.buy[0]);
                setSell(JSON.parse(e.data).orderbook.sell[0]);

        }
    },[socket])

    return(
        <div id="orderBookBox">       
                <div className="orderFixedHeader">
                    <div className="float_left order_1 non_padding non_right_border">가격</div>
                    <div className="float_left order_2 non_padding ">수량</div>
                </div>
                <div>
                    {state.orderbook.map((v,k)=>{
                        return(
                            state.currentPrice>=v.price?
                            <>
                            <div key={k} className = "order_tuple">
                            <div className = " order_1" style={{color:"rgba(225,35,67)",backgroundColor:"rgb(255, 247, 249)"}}>
                                {v.price}
                            </div>
                            <div className = " order_2" style={{color:"rgba(225,35,67)"}}>
                                {v.rest}
                            </div>
                            </div>
                            </>
                            :
                            <>
                            <div key={k} className = "order_tuple">
                            <div className = " order_1" style={{color:"rgb(23, 99, 182)", backgroundColor:"rgb(247, 251, 255)"}}>
                                {v.price}
                            </div>
                            <div className = " order_2" style={{color:"rgb(23, 99, 182)"}}>
                                {v.rest}
                            </div>
                            </div>
                            </>
                        )})}
                </div>
            <ul className="order_book_ul">
                <li className="float_left" style={{color:"rgb(23, 99, 182)"}}>매도 잔량</li>
                <li style={{color:"rgb(23, 99, 182)",marginLeft:"1em"}}>{state.buyQty}</li>
            </ul>
            <ul className="order_book_ul">
                <li className="float_left" style={{color:"rgba(225,35,67)"}}>매수 잔량</li>
                <li style={{color:"rgba(225,35,67)",marginLeft:"1em"}}>{state.sellQty}</li>
            </ul>
        </div>
        
    )
}

export default orderBook