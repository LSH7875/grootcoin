import Link from 'next/link'
import Styled from 'styled-components'
import { user_url } from '../store/Allurl'
import React, { useContext, useEffect, useState } from 'react'
import Store from '../store/context'
import Router from 'next/router'
import axios from 'axios'

// axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;


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
       
        const response = await axios.post(`${user_url}/user/login_success/`,options)

        // let result = await response.json()
        let result = response.data;
        setloginresult(result.msg)
        if(result.boolean == true){
            // localStorage.setItem('login_boolean',false)
            dispatch({ type: 'login_boolean_true', userid:result.content.userid, username:result.content.username, userpw:result.content.userpw, account:result.content.account, wallet:result.content.wallet})
            
            Router.push('/')
            
        }else{
            dispatch({ type: 'login_boolean_false', payload: result.boolean})
            alert(result.msg)
        }

    }

    return (

        <div id="box">
            <h1 className="loginTitle">로그인</h1>
            <h5 className="checkText">소중한 정보를 위해 주소창을 체크해주세요.</h5>
            <form onSubmit = {handlelogin} className="formtag">
                <input type="text" onChange = {handleID} className="inputBox" name="userid" id="userid" placeholder="E-Mail" /> <br />
                <input type="password" onChange = {handlePW} className="inputBox" name="userpw" id="userpw" placeholder="Password" /> <br />
                <input type = "submit" className="bigBtn" value="로그인"/> <br />
            </form>
            
            <Link href={`/joinAgree`}><a className="signUp">회원가입</a></Link>
        </div>

    )
}

export default login