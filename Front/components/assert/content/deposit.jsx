import { useState } from 'react'
import Income from './deposit/income'
import Outcome from './deposit/outcome'
import Deposithistory from './deposit/history'

const deposit = () =>{

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

    return(
        <>
            <div className = "wdeposit">
                <div className = "float_left">
                    <div className = "deposit_assert">
                        <div className = "float_left bold">
                            총 보유자산
                        </div>
                        <div className = "float_right bold2">
                            35150045원
                        </div>
                    </div>
                    <div className = "deposit_search">
                        <div>
                            <input type = "text" className = "deposit_search_text" placeholder = "코인 검색"></input>   
                            <input type = "button" className = "deposit_search_button" value = "?"></input>                         
                        </div>
                    </div>
                    <div className = "deposit_graph">
                        <table>
                            <tr>
                                <td className = "deposit_graph_width">코인명</td>
                                <td className = "deposit_graph1_width">보유수량</td>
                                <td className = "deposit_graph1_width">보유비중</td>
                            </tr>
                            <tr className = "Grey">
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className = "deposit_graph_width">
                                    <div className = "big_font">
                                        KRW
                                    </div>
                                    <div className = "small_font">
                                        원화
                                    </div>
                                </td>
                                <td>
                                    <div className = "big_font1">
                                        454654654
                                    </div>
                                    <div className = "small_font1">
                                        325325325325325
                                    </div>
                                </td>
                                <td>0.0%</td>
                            </tr>
                            <tr>
                                <td className = "deposit_graph_width">
                                    <div className = "big_font">
                                        KLAY
                                    </div>
                                    <div className = "small_font">
                                        클레이튼
                                    </div>
                                </td>
                                <td>
                                    <div className = "big_font1">
                                        454654654
                                    </div>
                                    <div className = "small_font1">
                                        325325325325325
                                    </div>
                                </td>
                                <td>0.0%</td>
                            </tr>
                            <tr>
                                <td className = "deposit_graph_width">
                                    <div className = "big_font">
                                        ETH
                                    </div>
                                    <div className = "small_font">
                                        이더리움
                                    </div>
                                </td>
                                <td>
                                    <div className = "big_font1">
                                        454654654
                                    </div>
                                    <div className = "small_font1">
                                        325325325325325
                                    </div>
                                </td>
                                <td>0.0%</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className = "float_left padding">
                    <div className = "">
                        <div className = "float_left bold3">KRW 입출금</div>
                        <ul className = "">
                            <li className = "float_right margin_left" onClick={btn1}>
                                입금
                            </li>
                            <li className = "float_right margin_left" onClick={btn2}>
                                출금
                            </li>
                            <li className = "float_right margin_left" onClick={btn3}>
                                내역
                            </li>
                        </ul>                        
                    </div>
                    <div>
                            {
                                tabBtn === 1
                                    ? <Income />
                                    : ( tabBtn === 2
                                        ? <Outcome />
                                        : <Deposithistory />
                                        )
                            }                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default deposit;