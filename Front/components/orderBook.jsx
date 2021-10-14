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
                console.log(JSON.parse(e.data).orderbook);
                console.log(JSON.parse(e.data).graph);
            // setpriceArr(JSON.parse(e.data).price)
            // settimeArr(JSON.parse(e.data).time)
            // setqtyArr(JSON.parse(e.data).qty)
            // console.log("++++++++++++++")
            //console.log(JSON.parse(e.data).price)

        }
    },[socket])

    const callprice = price.filter((v,k)=>{
        if(price.indexOf(v) == k)
            return v
    })  

    for(let i=0; i<callprice.length; i++){
        let fromIndex = price.indexOf(callprice[i]);
        while(fromIndex != -1)  {
        console.log(fromIndex)
        fromIndex = price.indexOf(callprice[i], fromIndex+1);
        }

    }

    console.log(callprice)

    return(
        <div id="orderBookBox">
            <table>
                <thead className="fixedHeader">
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