import React,{ useState, useRef, useEffect, useContext } from 'react'
import Store from '../store/context'
const orderBook = () =>{

    const {state,dispatch} = useContext(Store)

    const [socket, setSocket] = useState(false);
    const ws = useRef(null);
    const [price, setpriceArr] = useState([])
    const [time, settimeArr] = useState([])
    const [qty, setqtyArr] = useState([])
    // const [test, settest] = useState(e)

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
        // setInterval(()=>{
            ws.current.onmessage=e=>{
            setpriceArr(JSON.parse(e.data).price)
            settimeArr(JSON.parse(e.data).time)
            setqtyArr(JSON.parse(e.data).qty)
            // dispatch({type:"upload", payload:JSON.parse(e.data).qty})
            // console.log(state.upload_Arr)

        }
    // },1000)
        // const timeoutTEST = setTimeout(()=>{console.log(1)},1000)
        // clearTimeout(timeoutTEST)
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
                {/* <tr>
                    <td className="order-1">{test}</td>
                    <td className="order-2">0.003</td>
                    <td className="order-3">0.0307</td>
                </tr> */}
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