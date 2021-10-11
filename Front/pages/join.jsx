import Link from 'next/link'
import Styled from 'styled-components'
import useInput from '../hooks/useInput'
import {useState} from 'react'
import {join_success} from '../api/api'
import Router from 'next/router'
import { user_url } from '../store/Allurl'





const join = () => {

    const userid = useInput('');
    const userpw = useInput('');
    const username = useInput('');
    const accountNo = useInput('');

    const [pwChk, setPwChk] = useState('');
    const [pwError, setPwError] = useState(false);



    const handlePassword = e => {
        const { value } = { ...e.target }
        setPwError(userpw.value !== value) // 1234 === 1234 ture
        setPwChk(value)
    }

    const checkAccountNo = e => {
        if (accountNo.value.length === 11) {
            return true
        } else {
            return false
        }

    }

    const check = e => {
            if (userid.value !== '' && 
            userpw.value !== '' && 
            userpw.value === pwChk && 
            pwChk !== '' && 
            username.value !== '' &&
            accountNo.value !== '' && 
            accountNo.value.length === 11 &&
            bigChk() == true &&
            smallChk() == true &&
            numChk() == true &&
            stChk() == true &&
            pw10Chk() ==true) {
                return true
            } else {
                return false
            }
        }

        const bigChk = () => {
        let big = ["A", "B", "C", "D", "E", "F", "G", 
                        "H", "I", "J","K","L","M","N","O",
                        "P","Q","R","S","T","U","V","W","X","Y","Z"];
        let check_big = 0;
        for (var i = 0; i < big.length; i++) {
            if ({ ...userpw }.value.indexOf(big[i]) != -1) {
                check_big = 1;
            }
        }
        if (check_big !== 0) {
            return true;
        }
    }

    const smallChk = () => {
        let small = ["a", "b", "c", "d", "e", "f", "g", 
                        "h", "i", "j","k","l","m","n","o",
                        "p","q","r","s","t","u","v","w","x","y","z"];
        let check_small = 0;
        for (var i = 0; i < small.length; i++) {
            if ({ ...userpw }.value.indexOf(small[i]) != -1) {
                check_small = 1;
            }
        }
        if (check_small !== 0) {
            return true;
        }
    }

    const numChk = () => {
        let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let check_number = 0;
        for (var i = 0; i < number.length; i++) {
            if ({ ...userpw }.value.indexOf(number[i]) != -1) {
                check_number = 1;
            }
        }
        if (check_number !== 0) {
            return true;
        }
    }

    const stChk = () => {
        let st = ["!", "@", "#", "$", "%", "^", "&", "*"];
        let check_st = 0;
        for (var i = 0; i < st.length; i++) {
            if ({ ...userpw }.value.indexOf(st[i]) != -1) {
                check_st = 1;
            }
        }
        if (check_st !== 0) {
            return true;
        }
    }

    const pw10Chk = () => {
        if ({ ...userpw }.value.length > 10) {
            return true
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (userpw.value !== pwChk) {
            setPwError(true)
            return
        } else {
            setPwError(false)
        }

        join_success({userid:userid.value, username:username.value, userpw:userpw.value, account:accountNo.value, wallet:"info"})
        Router.push('/')
    }

    
    const [LoginCheck, setLoginCheck] = useState('---')

    const handleuseridCheck = async e => {
        e.preventDefault()
        console.log('작동 여부')
        const options = {
            method:'GET'
        }

        const response = await fetch(`${user_url}/login_check?userid=${userid.value}`,options) //restful api 
        const result = await response.json()
        console.log(response)
        setLoginCheck(result)
        console.log(result.length)
    }

    return (
        <div id="box">
            <h1 className="signUpTitle">회원가입</h1>
            <ul className="bigCheck">
                <li className="agerrBigCheck2">① 약관동의</li><li> ------------- </li> <li className="agreeBigCheck1">② 정보입력</li>
            </ul>

            <form onSubmit={handleSubmit} className="a">
                <label className="margin24 inputFont" label htmlFor="userid" >이메일</label>
                <input type="email" {...userid} onMouseOut = {handleuseridCheck} className="inputBox" name="userid" id="userid" placeholder="아이디로 사용할 이메일 입력" />
                <div>{LoginCheck}</div>
                <label className="margin24 inputFont" label htmlFor="userpw" >비밀번호</label>
                <input type="password" {...userpw} className="inputBox" name="userpw" id="userpw" placeholder="비밀번호 입력" />
                <ul className="passwordBox2">
                    {bigChk() ? <li className="chk">영문 대문자 포함</li> : <li>영문 대문자 포함</li>}
                    {smallChk() ? <li className="chk">영문 소문자 포함</li> : <li>영문 소문자 포함</li>}
                    {numChk() ? <li className="chk">숫자 포함</li> : <li>숫자 포함</li>}
                    {stChk() ? <li className="chk">특수문자 포함</li> : <li>특수문자 포함</li>}
                    {pw10Chk() ? <li className="chk">10자 이상</li> : <li>10자 이상</li>}
                </ul>
                <label className="margin24 inputFont" label htmlFor="pwChk" >비밀번호 확인</label>
                <input type="password" value={pwChk} id="pwChk" onChange={handlePassword} className="inputBox" placeholder="비밀번호 확인" />
                {pwError && <div className="error" style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}

                <label className="margin24 inputFont" label htmlFor="username" >이름<br /></label>
                <input type="text" {...username} id="username" name="username" className="inputBox" placeholder="이름" />

                <label className="margin24 inputFont" label htmlFor="accountNo" >계좌번호<br /> </label>
                <input type="text" {...accountNo} className="inputBox" name="accountNo" id="accountNo" placeholder="계좌번호 입력" maxLength="11" />
                {checkAccountNo() ? '' : <div className="error" style={{ color: 'red' }}>계좌번호 11자리를 입력해주세요.</div>}

                <br />


                {check() ? <input type = "submit" className="joinBigBtn" value = "다음" /> : ''}

            </form>
        </div>
    )
}

export default join