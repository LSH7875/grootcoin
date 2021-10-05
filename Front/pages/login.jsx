import Link from 'next/link'
import Styled from 'styled-components'

const Box =Styled.div`
    margin: 0 auto;
    width:480px;
    height:485px;
    padding: 16px 24px 32px;
    border: 1px solid #e4e5e8;
    border-radius: 6px;
    margin-top:80px;
    padding-top:40px;
  
&{
    text-align:center
}
&> h1{
    margin: 0;
    line-height: normal;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
}

&>h5{
    margin-top: 16px;
    margin-bottom: 50px;
    font-size: 16px;
    color: #79818f;
    text-align: center;
    
}

&>.inputBox{
    margin-bottom: 15px;
    padding: 0 16px;
    width: 100%;
    height: 48px;
    border: 1px solid #dedede;
    border-radius: 3px;
    background-color: #f7f8f9;
    font-size: 16px;
    line-height: normal;
    color: #18191c;
    box-shadow: none;
    -webkit-appearance: none;
}
&>.bigBtn{
    margin-top: 8px;
    height: 48px;
    font-size: 16px;
    background-color: rgba(32, 201, 150);;
    color: #fff;
    padding: .875em 1em;
    border-radius: 3px;
    height: 2.75em;
    font-size: 16px;
    line-height: 1;
    font-weight: 400;
    border: none;
    vertical-align: middle;
    text-shadow: none;
    display: inline-block;
    cursor: pointer;
    width: 100%;
}

&>a{
    font-weight:bold;
    float:right;
    color:rgba(32, 201, 150);;
    margin: 24px 0 0 24px;
}
`

const login = ()=>{
    return (

        <Box>
            <h1>로그인</h1>
            <h5>소중한 정보를 위해 주소창을 체크해주세요.</h5>
            <input type="text" className="inputBox" name="userid" id="userid" placeholder="E-Mail" /> <br />
            <input type="password" className="inputBox" name="userpw" id="userpw" placeholder="Password" /> <br />
            <input type="submit" className="bigBtn" value="로그인" disabled></input> <br />

            <Link href={`/joinAgree`}><a>회원가입</a></Link>
        </Box>

    )
}

export default login