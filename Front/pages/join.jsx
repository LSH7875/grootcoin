import Link from 'next/link'
import Styled from 'styled-components'
import useInput from '../hooks/useInput'
import {useState} from 'react'
import {join_success} from '../api/api'

const Box = Styled.div`
    margin: 0 auto;
    width:480px;
    height:1000px;
    padding: 16px 24px 32px;
    margin-top:80px;
    padding-top:40px;
    text-align:center;

    ul,li{
        list-style:none;
        
    }
    a{
        text-decoration:none;
        width:100%;
    }

    &>h1{
        margin-bottom: 24px;
        font-size: 34px;
    }

    &>.bigcheck{
        display:inline-block;
    }

    &>.bigCheck>li{
        display:inline-block;
        font-weight:bold;
        font-size:14px;
    }

    &>.bigCheck>.bigCheck1{
        font-weight:bold;
        color:rgba(32, 201, 150);
    }

    &>.bigCheck>.bigCheck2{
        margin-right:5px;
        margin-left:75px;

    }
    
    &>.a>.margin24{
        margin: 24px 0 5px 0;    
    }
    
    &>.a>.inputFont{
        float:left;
        font-size: 14px;
        font-weight: bold;
        color: #484d55;
        text-align:left;
    }

    &>.a>.inputBox{
        box-sizing: border-box;
        display: block;
        padding-left: 16px;
        padding-right: 16px;
        width: 100%;
        height: 48px;
        border-radius: 3px;
        border: 1px solid #c9ccd2;
        background-color: #fff;
        font-size: 14px;
        color: #18191c;
        -webkit-appearance: none;
        margin-top: 5px;
    }
    
    &>.a>.passwordBox2{
        width: 100%;
        height: 100px;
        margin: 8px 0 24px;
        padding: 12px 16px;
        border: 1px solid #e4e5e8;
        margin-left: 0;
        background-color: #f8f8f9;
    
    }

    &>.a>.passwordBox2{
        display:inline-block;
        text-align:left;
        color: #18191c;
        font-size:12px;
        font-weight:bold;
        box-sizing: border-box;     
        font-size: 12px;
        color: #79818f;
    }

    &>.a>.passwordBox2>li{
      line-height:17px;
    }
    
    &>.a>.passwordBox2>li:before{
        content:"*";
    }
    
    &>.a>.bigBtn{
        background-color: #c9ccd2;
        color: #000;
        opacity: .5;
        cursor: not-allowed;
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
        font-weight: bold;
        font-style: normal;
        transition: background .25s,border .25s;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        touch-action: manipulation;
        outline: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    &>.a>.bigBtn:hover{
        background:rgba(32, 201, 150);;
        color:#000;
        font-weight:bold;
        }
    &>.a>.bigBtn>a:hover{
        color:#000;
    }

    &>.a>.error{
        text-align:left;
    }

`

const join = () => {
    
    const userid = useInput('');
    const userpw = useInput('');
    const username = useInput('');
    const accountNo = useInput('');

    const [pwChk,setPwChk] = useState('');
    const [pwError,setPwError] = useState(false);
    const [accountError,setAccountError] = useState(false);

    const handlePassword = e => {
        const {value} = {...e.target}
        setPwError(userpw.value !== value) // 1234 === 1234 ture
        setPwChk(value)
    }

    const checkAccountNo = e => {
        if(accountNo.value.length === 11) {
            return true
        } else {
            return false
        }
       
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        if(userpw.value !== pwChk) {
            setPwError(true)
            return
        } else {
            setPwError(false)
        }

        if(accountNo.value.length !== 11) {
            setAccountError(true)
            return
        } else {
            setAccountError(false)
        }


        // if(!term) {
        //     setTermError(true)
        //     return; 
        // }

        // console.log({
        //     userid:userid.value,
        //     username:username.value,
        //     userpw:userpw.value,
        //     accountNo:accountNo.value
        // })
        join_success({userid:userid.value, username:username.value, userpw:userpw.value, account:accountNo.value, wallet:"info"})
    }

    const check = e => {
        if(userid.value !== '' && userpw.value !=='' && username.value !== '' && accountNo.value !== ''){
            return true
        }else{
            return false
        }
    }

    return (
        <Box>
            <h1>회원가입</h1>
            <ul className="bigCheck">
                <li className="bigCheck2">① 약관동의</li><li> ------------- </li> <li className="bigCheck1">② 정보입력</li>
            </ul>

            <form onSubmit = {handleSubmit} className="a">
                <label className="margin24 inputFont" label htmlFor="userid" >이메일</label>
                <input type="email" {...userid} className="inputBox" name="userid" id="userid" placeholder="아이디로 사용할 이메일 입력" />

                <label className="margin24 inputFont" label htmlFor="userpw" >비밀번호</label>
                <input type="password" {...userpw} className="inputBox" name="userpw" id="userpw" placeholder="비밀번호 입력" />
                    <ul className="passwordBox2">
                        <li>영문 대문자 포함</li>
                        <li>영문 소문자 포함</li>
                        <li>숫자 포함</li>
                        <li>10자 이상</li>
                    </ul>
                <label className="margin24 inputFont" label htmlFor="pwChk" >비밀번호 확인</label>
                <input type="password" value={pwChk} id="pwChk" onChange={handlePassword} className="inputBox" placeholder="비밀번호 확인" />
                { pwError && <div className="error" style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div> }

                <label className="margin24 inputFont" label htmlFor="username" >이름<br /></label>
                <input type="text" {...username} id="username" name="username" className="inputBox" placeholder="이름" />

                <label className="margin24 inputFont" label htmlFor="accountNo" >계좌번호<br /> </label>
                <input type="text" {...accountNo} className="inputBox" name="accountNo" id="accountNo" placeholder="계좌번호 입력" maxLength="11" />
                { checkAccountNo() ? '' :  <div className="error" style={{color:'red'}}>계좌번호 11자리를 입력해주세요.</div>  }
                
                <br />
                <input type = "submit" className = "bigBtn" value = "다음" />
            </form>
        </Box>
    )
}

export default join