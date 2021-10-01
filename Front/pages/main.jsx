import History from '../components/history'
import OrderBook from '../components/orderBook'
import Chart from '../components/chart'
import BuyAndSell from '../components/buyAndSell'

const main = ()=>{
    return(
        <div id="mainContainer">
            <div className="mainCon1">
                <Chart />
            </div>
            <ul className="mainCon2">
                <li><History /></li>
                <li><OrderBook /></li>
                <li><BuyAndSell /></li>
            </ul>
        </div>
    )
}

export default main