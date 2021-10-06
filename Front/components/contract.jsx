import { useState, useRef, useEffect } from 'react'

const preContractcolor = { "borderBottom": "3px solid rgba(32, 201, 150)", "color": "#333" }
const contractedcolor = { "borderBottom": "3px solid rgba(32, 201, 150)", "color": "#333" }

const PreContract = () => {

    const [content, setContent] = useState([])

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
        <div>

            <div>
                {content.map((element) => {
                    return <div>{element}</div>
                })}
            </div>
        </div>
    )
}

const Contracted = () =>{

    return (
        <div>
            zzzz
        </div>
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