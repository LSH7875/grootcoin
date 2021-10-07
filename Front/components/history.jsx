import React,{ useState, useRef, useEffect } from 'react'

const history = ()=> {

    const [socket, setSocket] = useState(false);
    const ws = useRef(null);
    const [payment, setpayment] = useState([])
    const [a_amount, seta_amount] = useState([])
    const [regdate, setregdate] = useState([])
    // const [test, settest] = useState(e)

    useEffect(() => {
        ws.current= new WebSocket('ws://127.0.0.1:8080');
        ws.current.onopen=()=>{
            console.log('connected!')
            setSocket(true)
        }

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(()=>{
    
        // setInterval(()=>{
            ws.current.onmessage=e=>{
            setpayment(JSON.parse(e.data).payment)
            seta_amount(JSON.parse(e.data).a_amount)
            setregdate(JSON.parse(e.data).regdate)
        }
    // },1000)
        // const timeoutTEST = setTimeout(()=>{console.log(1)},1000)
        // clearTimeout(timeoutTEST)
    },[socket])

    return(
        <div id="historyBox" className="container">
            <table>
            <thead>
                    <div className="float_left order_4">체결시간</div>
                    <div className="float_left order_3">가격</div>
                    <div className="float_left order_3">수량</div>
                </thead>
                <div>
                    <div className = "float_left order_4">
                    {regdate.map((ele) =>  <div className="order-3">{ele}</div>)}
                    </div>
                    <div className = "float_left order_3">
                    {payment.map((ele) => <div className="order-1">{ele}</div>)}
                    </div>
                    <div className = "float_left order_3">
                    {a_amount.map((ele) =>  <div className="order-2">{ele}</div>)}
                    </div>
                </div>
            </table>
        </div>
    )
}

export default history