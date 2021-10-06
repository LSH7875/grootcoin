const outcome = () =>{
    return(
        <>
            <div>
                <div className = "margin_top"><div className = "float_left">출금금액</div><div className = "float_right blue">출금 가능 금액(1회 5000원)</div></div>
                <div>
                    <input className = "income_text" type = "Text"/>
                    <input className = "income_button" type = "button" value = "최대"/>
                </div>
                <div className = "clear"><div className = "float_left">수수료</div><div className = "float_right">100KRW</div></div>
                <div className = "clear"><div className = "float_left">총 송금 금액</div><div className = "float_right">100KRW</div></div>
                <div className = "clear"><div className = "float_left">원화 일일 송금 한도</div><div className = "float_right">100KRW</div></div>
            </div>
            <div>
                <div className = "margin_top"><div className = "float_left">출금 실명계좌</div></div>
                <div>
                    <input className = "income_text2" type = "Text"/>
                </div>
            </div>
            <div className = "Warn">
                <h3 className = "Warn_subject">KRW 출금 안내 및 주의사항</h3>
                <div>
                    <div className = "li">금융사고 예방을 위해 입금된 원화 액수 만큼 24시간동안 가상자산 출금 가능 액수에서 제외됩니다. 거래에는 이상이 없으니 이용에 참고 바랍니다.</div>
                    <div className = "li">금융사고 예방을 위해 입금된 원화 액수 만큼 24시간동안 가상자산 출금 가능 액수에서 제외됩니다. 거래에는 이상이 없으니 이용에 참고 바랍니다.</div>
                </div> 
            </div>
        </>
    )
}

export default outcome;