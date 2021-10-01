
import {join_success, income_change, outcome_change, order} from '../api/api'
import { user_url } from '../store/Allurl'
import React, { useContext, useReducer, useEffect, useState } from 'react'
import Store from '../store/context'

const index = ()=>{

    const {state,dispatch} = useContext(Store)


    //회원가입
    const [userid, setUserid] = useState('.')
    const [username, setUsername] = useState('.')
    const [userpw, setUserpw] = useState('.')
    const [account, setaccount] = useState('.')
    const [wallet, setwallet] = useState('.')
    const [logincheckresult, setlogincheckresult] = useState('.')

    const changeUserid = (e) => {
        setUserid(e.target.value)
        console.log(userid)
    }
    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changeUserpw = (e) => {
        setUserpw(e.target.value)
    }
    const changeaccount = (e) => {
        setaccount(e.target.value)
    }
    const changewallet = (e) => {
        setwallet(e.target.value)
    }
    const checkuserid = async (e) => {
        e.preventDefault()
        
            const options = {
                method:'GET',
            }
        
            const response = await fetch(`${user_url}/login_check?userid=${userid}`,options) //restful api 
            let result = await response.json()
            setlogincheckresult(result)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userid)
        join_success({userid:userid, username:username, userpw:userpw, account:account, wallet:wallet})
    }

    //로그인
    const [loginuserid, setloginuserid] = useState('.')
    const [loginuserpw, setloginuserpw] = useState('.')
    const [loginresult, setloginresult] = useState('.')

    const login = (e) => {
        setloginuserid(e.target.value)
    }
    const loginpw = (e) => {
        setloginuserpw(e.target.value)
    }

    const handlelogin = async (e) => {
        e.preventDefault()
        
            const options = {
                method:'GET',
            }
        
            const response = await fetch(`${user_url}/login_success?userid=${loginuserid}&userpw=${loginuserpw}`,options) //restful api 
            let result = await response.json()
            setloginresult(result.msg)
            if(result.boolean == true){
                dispatch({ type: 'login_boolean_true', payload: result.boolean, userid:result.content[0].userid, username:result.content[0].username, userpw:result.content[0].userpw, account:result.content[0].account, wallet:result.content[0].wallet})
            }else{
                dispatch({ type: 'login_boolean_false', payload: result.boolean})
            }
        
    }

    //입출금
    const [income, setincome] = useState('.')
    const [outcome, setoutcome] = useState('.')

    const handleincome = (e) => {
        setincome(e.target.value)
    }
    const handleoutcome = (e) => {
        setoutcome(e.target.value)
    }
    const sendincome = (e) => {
        e.preventDefault()
        income_change({userid:state.userid, now:state.account, income:income})
        dispatch({ type: 'income', payload: Number(state.account)+Number(income)})
    }
    const sendoutcome = (e) => {
        e.preventDefault()
        outcome_change({userid:state.userid, now:state.account, outcome:outcome})
        dispatch({ type: 'outcome', payload: Number(state.account)-Number(outcome)})
    }

    //주문

    const [sell, setsell] = useState('')
    const [buy, setbuy] = useState('')
    const [buy_unit_send, buy_unit_handle] = useState('')
    const [ordertype, setordertype] = useState('.')

    const buy_amount = (e) => {
        setbuy(e.target.value)
    }
    const buy_unit = (e) => {
        buy_unit_handle(e.target.value)
    }
    const sell_amount = (e) => {
        setsell(e.target.value)
    }
    const ordertype_handle = (e) => {
        setordertype(e.target.value)
    }
    const orderSubmit = async (e) => {
        e.preventDefault()

        order({userid:state.userid, sell:sell, sell_unit_send:'KRW', buy:buy, buy_unit_send:buy_unit_send, ordertype:ordertype})
        
        const options = {
            method:'GET'
        }
    
        const response = await fetch(`${user_url}/transaction?sell=${sell}&ordertype=${ordertype}`,options) //restful api 
        let result = await response.json()
        console.log(result)

    }

    //장부
    const [orderlist_update, setorderlist] = useState('.')

    const orderlist = async (e) => {
        e.preventDefault()
        
        const options = {
            method:'GET',
        }
    
        const response = await fetch(`${user_url}/orderlist`,options) //restful api 
        let result = await response.json()
        console.log(result[0].sell)
        setorderlist(JSON.stringify(result))
    }
    return (
        <>
            <div>
                <h2>회원가입 베타</h2>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" className = "userid" onChange = {changeUserid}/>
                    <input type = "button" value = "중복확인" onClick = {checkuserid}/>
                    <span>{logincheckresult}</span>
                    <input type = "text" className = "username" onChange = {changeUsername}/>
                    <input type = "text" className = "userpw"  onChange = {changeUserpw}/>
                    <input type = "text" className = "account"  onChange = {changeaccount}/>
                    <input type = "text" className = "wallet" onChange = {changewallet}/>
                    <input type = "submit" value = "회원가입"/>
                </form>
                <div>--------</div>
                <h2>로그인 베타</h2>
                <form onSubmit = {handlelogin}>
                    <input type = "text" onChange = {login}/>
                    <input type = "text" onChange = {loginpw}/>
                    <input type = "submit" value = "로그인"/>
                </form>
                { state.login_boolean ? 
                <>
                    <h2>회원 정보 베타</h2>
                    <ul>
                        <li>{state.userid}</li>
                        <li>{state.userpw}</li>
                        <li>{state.username}</li>
                        <li>{state.account}</li>
                        <li>{state.wallet}</li>
                        <li>{state.msg}</li>
                    </ul>
                    <h2>계좌 출금-입급 관리</h2>
                    <form onSubmit = {sendincome}>
                        <input type = "text" onChange = {handleincome}/>
                        <input type = "submit" value = "입금"/>
                    </form>
                    <form onSubmit = {sendoutcome}>
                        <input type = "text" onChange = {handleoutcome}/>
                        <input type = "submit" value = "출금"/>
                    </form>  
                    <h2><select onChange = {ordertype_handle}><option value = "">매수/매도</option><option value = "0">매수</option><option value = "1">매도</option></select></h2> 
                    <form onSubmit = {orderSubmit}>
                    <input onChange = {buy_amount} type = "text"/>KRW
                    <br/><input onChange = {sell_amount} type = "text"/><select onChange = {buy_unit}><option>코인 선택</option><option value = "btc">btc</option><option value = "won">won</option><option value = "groot">groot</option></select>
                    <br/><input type = "submit" value = "거래"/>
                    </form>  
                </>

                : loginresult
                }
                <div>--------</div>
                <h2>트랜젝션 베타</h2>
                <h3>장부</h3><span onClick = {orderlist}>새로고침</span>
                <div>{orderlist_update}</div>
            </div>   
        </>
    )
}

export default index