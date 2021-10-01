import Link from 'next/link'
import Styled from 'styled-components'

const Box =Styled.div`
    margin: 0 auto;
    width:480px;
    height:485px;
    padding: 16px 24px 32px;
    margin-top:80px;
    padding-top:40px;
    text-align:center;

    ul,li{
        list-style:none;
    }
    a{
        text-decoration:none;
    }

    &>h1{
        margin-bottom: 24px;
        font-size: 34px;
    }

    
    &>.bigCheck>li{
        display:inline-block;
        font-weight:bold;
        font-size:14px;
    }

    &>.bigCheck>.bigCheck1{
        font-weight:bold;
        color:#1772f8;
        margin-right:5px;
    }

    & >span{
        position: relative;
        display: flex;
        align-items: center;
        height: 56px;
        padding-left: 16px;
        border-radius: 8px;
        border: 1px solid #e4e5e8;

    }

    &>span>h3{
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
    }

    &>.smallCheck{
        width:100%;
        text-align:left;
    }

    &>.smallCheck>li{
        text-align:left;
    }

    &>h5{
        font-size:12px;
        padding: 11px 16px;
        background-color: #f8f8f9;
        border: 1px solid #e4e5e8;
    }
    
    &>.bigBtn{
        background-color: #c9ccd2;
        color: #79818f;
        opacity: .5;
        width: 100%;
        padding: 0 16px;
        height: 48px;
        font-size: 16px;
        display: inline-flex;
        flex: 0 0 auto;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        line-height: normal;
        font-weight: 400;
        font-style: normal;
        transition: background .25s,border .25s;
        text-align: center;
        cursor: pointer;
    }

    
    &>.bigBtn>a{
        /* background-color: #c9ccd2; */
        color: #79818f;
        opacity: .5;
    }
    
    &>.bigBtn:hover{
        background:#1772f8;
    }
    
    &>.bigBtn>a:hover{
        color:#fff;
    }
`


const joinAgree = ()=>{
    return (
        <Box>
            <h1>회원가입</h1>
            <ul className="bigCheck">
            <li className="bigCheck1">① 약관동의</li><li> ------------- ② 정보입력</li>
            </ul>
            <span><input type="checkbox" checked /> <h3> 모든 항목에 동의하기</h3> </span>
           
            <ul className="smallCheck">
            <li><input type="checkbox" name="agree1" id="agree1" required/> <label className="agree1" label for="agree1">코인원 이용약관</label></li>
            <li><input type="checkbox" name="agree2" id="agree2" required/> <label className="agree2" label for="agree2">개인정보 수집 및 이용</label></li>
            <li><input type="checkbox" name="agree3" id="agree3"/> <label className="agree3" label for="agree3">이벤트 및 정보 안내 수신(선택)</label></li>
            </ul>
            
        `

           <h5>- 19세 미만은 회원 자격이 없으며, 서비스 이용이 제한됩니다.</h5>

           <p className="bigBtn"><Link href={`/join`}><a>다음</a></Link></p>
        </Box>
    )
}

export default joinAgree