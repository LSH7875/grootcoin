import React,{ useState, useRef, useEffect, useContext } from 'react'
import Store from '../../../store/context'
import {user_url} from '../../../store/Allurl'
const asset = () =>{

    const {state,dispatch} = useContext(Store)

    const [socket, setSocket] = useState(false);
    const ws = useRef(null);
    const [assetarr, setAssetarr] = useState([])
    const [asset, setAsset] = useState(0)

    useEffect(async () => {
        ws.current= new WebSocket('ws://127.0.0.1:8080');
        ws.current.onopen=(e)=>{
        }


        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(()=>{
        ws.current.onmessage=e=>{
            let betaArr = []
            for(let j=0; j<JSON.parse(e.data).assets.length; j++) {
                if(JSON.parse(e.data).assets[j].userid == state.userid){
                    betaArr.push(JSON.parse(e.data).assets[j])
                }else{
                    continue; 
                }
            }
            console.log(betaArr)
            setAssetarr(betaArr)
            console.log(assetarr)
            let asset_beta = 0
            for(let k=0; k<betaArr.length; k++){
                asset_beta += betaArr[k].input
            }
            for(let t=0; t<assetarr.length; t++){
                asset_beta -= assetarr[t].output 
            }
    
            setAsset(asset_beta)
            console.log(asset_beta)
        }
    
    
    },[socket])

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