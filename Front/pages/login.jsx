import Link from 'next/link'
import Styled from 'styled-components'
import { user_url } from '../store/Allurl'
import React, { useContext, useState } from 'react'
import Store from '../store/context'
import Router from 'next/router'
import axios from 'axios'

// axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;

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

    
    const {state,dispatch} = useContext(Store)

    const [loginuserid, setloginuserid] = useState('.')
    const [loginuserpw, setloginuserpw] = useState('.')
    const [loginresult, setloginresult] = useState('.')

    const handleID = (e) => {
        setloginuserid(e.target.value)
    }

    const handlePW = (e) => {
        setloginuserpw(e.target.value)
    }

    const handlelogin = async (e) => {

        e.preventDefault()
    
        console.log(loginuserid)
        let options = {
            data:{
                userid:loginuserid,
                userpw:loginuserpw,
            },
        }
        // const response = await fetch(`${user_url}/login_success?userid=${loginuserid}&userpw=${loginuserpw}`,options) //restful api 
        console.log(`${user_url}`)
        const response = await axios.post(`http://localhost:3003/api/user/login_success/`,options)

        // let result = await response.json()
        let result = response.data;
        setloginresult(result.msg)
        console.log(result.content)
        if(result.boolean == true){
            dispatch({ type: 'login_boolean_true', payload: result.boolean, userid:result.content.userid, username:result.content.username, userpw:result.content.userpw, account:result.content.account, wallet:result.content.wallet})
            Router.push('/')
            
        }else{
            dispatch({ type: 'login_boolean_false', payload: result.boolean})
            alert(result.msg)
        }

    }

    return (

        <Box>
            <h1>로그인</h1>
            <h5>소중한 정보를 위해 주소창을 체크해주세요.</h5>
            <form onSubmit = {handlelogin}>
                <input type="text" onChange = {handleID} className="inputBox" name="userid" id="userid" placeholder="E-Mail" /> <br />
                <input type="password" onChange = {handlePW} className="inputBox" name="userpw" id="userpw" placeholder="Password" /> <br />
                <input type = "submit" className="bigBtn" value="로그인"/> <br />
            </form>
            <Link href={`/joinAgree`}><a>회원가입</a></Link>
        </Box>

    )
}

export default login