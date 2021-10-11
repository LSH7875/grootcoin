import React,{ useState, useRef, useEffect, useContext } from 'react'
import Store from '../store/context'
const orderBook = () =>{

    const {state,dispatch} = useContext(Store)

    const [socket, setSocket] = useState(false);
    const ws = useRef(null);
    const [price, setpriceArr] = useState([])
    const [time, settimeArr] = useState([])
    const [qty, setqtyArr] = useState([])

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
            setpriceArr(JSON.parse(e.data).price)
            settimeArr(JSON.parse(e.data).time)
            setqtyArr(JSON.parse(e.data).qty)


        }
    },[socket])

    return(
        <div id="orderBookBox">
            <table>
                <thead>
                    <div className="float_left order_1">가격</div>
                    <div className="float_left order_2">수량</div>
                    <div className="float_left order_2">누적수량</div>
                </thead>
                <tbody>
                <div>
                    <div className = "float_left order_1">
                    {price.map((ele) =>  <div className="order-2">{ele}</div>)}
                    </div>
                    <div className = "float_left order_2">
                    {time.map((ele) =>  <div className="order-2">{ele}</div>)}
                    </div>
                    <div className = "float_left order_2">
                    {qty.map((ele) =>  <div className="order-3">{ele}</div>)}
                    </div>
                </div>
                </tbody>              
            </table>
            <ul>
                <li>매도 잔량</li>
                <li>1.2345</li>
            </ul>
            <ul>
                <li>매수 잔량</li>
                <li>1.2345</li>
            </ul>
        </div>
    )
}

export default orderBook