import React, { useContext } from 'react'
import Store from '../../../../store/context'

const income = () =>{

    const {state,dispatch} = useContext(Store)

    return(
        <>
            <div className = "text-center bold4">KRW 입금하기</div>
            <div className = "text-center margin_bottom">
                은행 계좌 등록으로 인증된 <span className = "black">실명 계좌</span> <span className = "blue">신한은행 {state.username} 110<br/>{state.account}</span>에서
                코인원 <span className = "black">입금전용 가상계좌</span>로 이체하시면 <br/>
                원화(KRW)가 충전됩니다.
            </div>
            <div>
                <div className = "margin-top">입금전용 가상계좌</div>
                <div>
                    <input className = "income_text" type = "Text"/>
                    <input className = "income_button" type = "button" value = "복사"/>
                </div>
            </div>
            <div className = "Warn">
                <h3 className = "Warn_subject">KRW 입금 안내 및 주의사항</h3>
                <ul>
                    <li>금융사고 예방을 위해 입금된 원화 액수 만큼 24시간<br/>동안 가상자산 출금 가능 액수에서 제외됩니다.<br/> 거래에는 이상이 없으니 이용에 참고 바랍니다.</li>
                   
                </ul>
            </div>
        </>
    )
}

export default income;