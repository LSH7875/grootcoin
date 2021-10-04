import { useState,useEffect } from "react"
import axios from "axios";


const coinNews = () =>{
    const [data, setData] = useState([]);
    useEffect(async () => {
        const response = await fetch("http://localhost:3003/api/coin/coinNews");
        const data = await response.json()
        setData(data.data);
        console.log(data.data)
      }, []);

    const News = data.map((v,k)=>{
        return(
            <div key={k}>
                <div className="newsTitle"><a href={v.url}>{v.title}</a></div>
            </div>
        )
    })
    return(
        <div id="newsBox">
            <div id="news">COIN NEWS</div>
            {News}
        </div>
    )
}

export default coinNews