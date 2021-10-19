import {useState, useContext, useEffect} from 'react'
import BuyAndSell from "./buyAndSell"
import Contract from "./contract"
import Store from '../store/context'



const EventEmitter = require('events');
const emitter = new EventEmitter()
emitter.setMaxListeners(50)

const BsContract =  ()=>{
    const {state,dispatch} = useContext(Store)
    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const [preArr, setPreArr] = useState([]);
    const [conArr,setConArr] = useState([]);

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
        setPreArr(data.data)
        }, [count]);

    const newSet = async () =>{
        setCount(count + 1);
        await setPreArr(preArr)
    }

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
        setConArr(data.deal);
      }, [count]);

    const newSet2 = async () =>{
        setCount2(count2 + 1);
        await setConArr(conArr)
    }

    return(
        <>
            <BuyAndSell 
                newSet={newSet} 
                newSet2={newSet2} 
            />
            <Contract 
                preArr={preArr}  
                setPreArr={setPreArr}
                conArr={conArr}  
                setConArr={setConArr}
            />
        </>
    )
}

export default BsContract