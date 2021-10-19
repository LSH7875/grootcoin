import { useState } from 'react'
import Asset from './content/asset'
import Deposit from './content/deposit'
import Usehistory from './content/usehistory'

const AssetNavi = ()=>{
        const [tabBtn, setTabBtn] = useState(2)

        const btn1 = () => {
            setTabBtn(1)
            console.log(`원래 함수에서${tabBtn}`)
        }
    
        const btn2 = () => {
            setTabBtn(2)
            console.log(`원래 함수에서${tabBtn}`)
        }

        const btn3 = () => {
            setTabBtn(3)
            console.log(`원래 함수에서${tabBtn}`)
        }
    
        return (
            <>
            <div className = "wasserts">
                <div className = "w1200asserts">
                    <div className="tab_left">
                        <div className="asserts_navi_left">
                            <div className = "Navi_height" onClick={btn1}>수익현황</div>
                            <div className = "Navi_height" onClick={btn2}>입출금</div>
                            <div className = "Navi_height" onClick={btn3}>이용내역</div>
                        </div>
                        <div className = "asserts_navi_right">
                            {
                                tabBtn === 1
                                    ? <Asset tabBtn = {tabBtn}/>
                                    : ( tabBtn === 2
                                        ? <Deposit tabBtn = {tabBtn}/>
                                        : <Usehistory />
                                        )
                            }                        
                        </div>
                    </div>
                </div>
            </div>

            </>
        )
}

export default AssetNavi;