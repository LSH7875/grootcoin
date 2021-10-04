import { useState } from 'react'
import Asset from './content/assert'
import Deposit from './content/deposit'
import Usehistory from './content/usehistory'

const AssertNavi = ()=>{
        const [tabBtn, setTabBtn] = useState(1)

        const btn1 = () => {
            setTabBtn(1)
        }
    
        const btn2 = () => {
            setTabBtn(2)
        }

        const btn3 = () => {
            setTabBtn(3)
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
                                    ? <Asset />
                                    : ( tabBtn === 2
                                        ? <Deposit />
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

export default AssertNavi;