import React,{ useState, useRef, useEffect, useContext } from 'react'
import Store from '../../../store/context'
import {user_url} from '../../../store/Allurl'
const asset = () =>{

    const {state,dispatch} = useContext(Store)

    const [socket, setSocket] = useState(false);
    const ws = useRef(null);
    const [asset, setAsset] = useState(0)
    // const [test, settest] = useState(e)

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
        // setInterval(()=>{
            ws.current.onmessage=e=>{
                console.log("+++++++++++++++++++++++++=");
            setAsset(JSON.parse(e.data).assets[0])
            console.log(JSON.parse(e.data).assets[0])
            // dispatch({type:"upload", payload:JSON.parse(e.data).qty})
            // console.log(state.upload_Arr)
        }
    // },1000)
        // const timeoutTEST = setTimeout(()=>{console.log(1)},1000)
        // clearTimeout(timeoutTEST)
    },[socket])

    // const [income, setincome] = useState(0);

    //     let options = {
    //         method: 'GET'
    //     }

    //     let result = await fetch(`${user_url}/info?userid=${Income}&Person=${Person}&Cost=${Cost}`, options)
    //     const data = await result.json()
    // }
    return(
        <>
            <div class = "wassert">
                <h3 className = "assert_info_subject">수익현황</h3>
                <div>
                    <div className = "assert_info1">
                        <div>총 보유자산</div>
                        <div className = "bold">{asset}원</div>
                    </div>
                    <div className = "assert_info2">
                        <ul className = "float_left">
                            <li>
                                보유 현황
                            </li>
                            <li>
                                보유 가상자산
                            </li>
                        </ul>
                        <ul className = "float_right">
                            <li>
                                100원
                            </li>
                            <li>
                                100
                            </li>
                        </ul>
                    </div>
                    <div className = "assert_info3">
                        <ul className = "float_left">
                            <li>
                                총 매수금액
                            </li>
                            <li>
                                평가 손익
                            </li>
                            <li>
                                수익률
                            </li>
                        </ul>
                        <ul className = "float_right">
                            <li>
                                100원
                            </li>
                            <li>
                                100원
                            </li>
                            <li>
                                100원
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className = "notice">매수평균가 평가금액, 평가손익, 수익률은 모두 KRW로 환산한 추정 값으로 참고용입니다</div>
                </div>
                <div>
                    <table className = "table">
                        <tr className = "start_row">
                            <td className = "float_left margin_top1">코인명</td>
                            <td>보유수량</td>
                            <td>매수 평균가</td>
                            <td>매수 금액</td>
                            <td>평가금액</td>
                            <td>수익률</td>
                        </tr>
                        <tr className = "content_row">
                            <td className = "float_left margin_top0">
                                <div className = "big_font">KLAY</div>
                                <div className = "small_font">클레이튼</div>
                            </td>
                            <td>805050505</td>
                            <td>45454</td>
                            <td>50606</td>
                            <td>1213212313</td>
                            <td>-11.93%</td>
                        </tr>
                        <tr className = "content_row">
                            <td className = "float_left margin_top0">
                                <div className = "big_font">ETH</div>
                                <div className = "small_font">이더리움</div>
                            </td>
                            <td>805050505</td>
                            <td>45454</td>
                            <td>50606</td>
                            <td>1213212313</td>
                            <td>-11.93%</td>
                        </tr>
                        <tr className = "content_row">
                            <td className = "float_left margin_top0">
                                <div className = "big_font">BNA</div>
                                <div className = "small_font">바나나</div>
                            </td>
                            <td>805050505</td>
                            <td>45454</td>
                            <td>50606</td>
                            <td>1213212313</td>
                            <td>-11.93%</td>
                        </tr>
                        <tr className = "content_row">
                            <td className = "float_left margin_top0">
                                <div className = "big_font">KLAY</div>
                                <div className = "small_font">클레이튼</div>
                            </td>
                            <td>805050505</td>
                            <td>45454</td>
                            <td>50606</td>
                            <td>1213212313</td>
                            <td>-11.93%</td>
                        </tr>
                        <tr className = "content_row">
                            <td className = "float_left margin_top0">
                                <div className = "big_font">ETH</div>
                                <div className = "small_font">이더리움</div>
                            </td>
                            <td>805050505</td>
                            <td>45454</td>
                            <td>50606</td>
                            <td>1213212313</td>
                            <td>-11.93%</td>
                        </tr>
                        <tr className = "content_row">
                            <td className = "float_left margin_top0">
                                <div className = "big_font">BNA</div>
                                <div className = "small_font">바나나</div>
                            </td>
                            <td>805050505</td>
                            <td>45454</td>
                            <td>50606</td>
                            <td>1213212313</td>
                            <td>-11.93%</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default asset;