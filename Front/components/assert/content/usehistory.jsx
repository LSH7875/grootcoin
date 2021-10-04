import { useState } from 'react'
import Usehistory1 from './history/usehistory1'
import Usehistory2 from './history/usehistory2'

const deposit = () =>{

    const [tabBtn, setTabBtn] = useState(1)

    const btn1 = () => {
        setTabBtn(1)
    }

    const btn2 = () => {
        setTabBtn(2)
    }


    return(
            <div className = "float_left padding">
                <div className = "">
                    <h3 className = "assert_info_subject history_margin float_left">이용내역</h3>
                        <ul className = "float_right">
                            <li className = "float_right margin_left hover_black" onClick={btn1}>
                                거래내역
                            </li>
                            <li className = "float_right margin_left hover_black">
                                간편구매내역
                            </li>
                            <li className = "float_right margin_left hover_black" onClick={btn2}>
                                입출금내역
                            </li>
                            <li className = "float_right margin_left hover_black">
                                플러스내역
                            </li>
                        </ul>                        
                    </div>
                    <div>
                            {
                                tabBtn === 1
                                    ? <Usehistory1 />
                                    : <Usehistory2 />
                            }                        
                </div>
            </div>
    )
}

export default deposit;