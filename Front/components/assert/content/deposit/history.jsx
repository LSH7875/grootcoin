const history = () =>{
    return(
        <>
            <div className = "grey margin_top">원화 입출금 내역은 최근 내역 중 최대 100개까지만 조회 가능합니다</div>
            <table className = "margin_top2">
                <tr className = "start_row">
                    <td className = "float_left marign"> 
                        거래 시각
                    </td>
                    <td>
                        거래량
                    </td>
                    <td>
                        구분
                    </td>
                    <td>
                        상태
                    </td>
                </tr>
                <tr className = "content_row2">
                    <td className = "float_left marign2">
                        2021/03/05
                    </td>
                    <td>
                        7,680KRW
                    </td>
                    <td>
                        입금
                    </td>
                    <td className = "green">
                        완료
                    </td>
                </tr>
                <tr className = "content_row">
                    <td className = "float_left marign2">
                        2021/03/05
                    </td>
                    <td>
                        7,680KRW
                    </td>
                    <td>
                        입금
                    </td>
                    <td className = "green">
                        완료
                    </td>
                </tr>
                <tr className = "content_row">
                    <td className = "float_left marign2">
                        2021/03/05
                    </td>
                    <td>
                        7,680KRW
                    </td>
                    <td>
                        입금
                    </td>
                    <td className = "green">
                        완료
                    </td>
                </tr>
                <tr className = "content_row">
                    <td className = "float_left marign2">
                        2021/03/05
                    </td>
                    <td>
                        7,680KRW
                    </td>
                    <td>
                        입금
                    </td>
                    <td className = "green">
                        완료
                    </td>
                </tr>
                <tr className = "content_row">
                    <td className = "float_left marign2">
                        2021/03/05
                    </td>
                    <td>
                        7,680KRW
                    </td>
                    <td>
                        입금
                    </td>
                    <td className = "green">
                        완료
                    </td>
                </tr>
            </table>
        </>
    )
}

export default history;