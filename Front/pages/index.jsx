
import {join_success} from '../api/api'
import {useState} from 'react'
import { user_url } from '../store/Allurl'
import Link from 'next/link'


const index = ()=>{

    const [userid, setUserid] = useState('.')
    const [username, setUsername] = useState('.')
    const [userpw, setUserpw] = useState('.')
    const [account, setaccount] = useState('.')
    const [wallet, setwallet] = useState('.')

    const [loginuserid, setloginuserid] = useState('.')
    const [loginuserpw, setloginuserpw] = useState('.')
    const [loginresult, setloginresult] = useState('.')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userid)
        join_success({userid:userid, username:username, userpw:userpw, account:account, wallet:wallet})
    }
    const handlelogin = async (e) => {
        e.preventDefault()
        
            const options = {
                method:'GET',
            }
        
            const response = await fetch(`${user_url}/login_success?userid=${loginuserid}&userpw=${loginuserpw}`,options) //restful api 
            let result = await response.json()
            setloginresult(result)
        
    }
    
    const login = (e) => {
        setloginuserid(e.target.value)
    }
    const loginpw = (e) => {
        setloginuserpw(e.target.value)
    }


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

    return (
        <>
            <div>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" onChange = {changeUserid}/>
                    <input type = "text" onChange = {changeUsername}/>
                    <input type = "text" onChange = {changeUserpw}/>
                    <input type = "text" onChange = {changeaccount}/>
                    <input type = "text" onChange = {changewallet}/>
                    <input type = "submit" value = "회원가입"/>
                </form>

                <form onSubmit = {handlelogin}>
                    <input type = "text" onChange = {login}/>
                    <input type = "text" onChange = {loginpw}/>
                    <input type = "submit" value = "로그인"/>
                    <div>{loginresult}</div>
                </form>
            </div>   

            <Link href={`/joinAgree`}><a>회원가입</a></Link>
       
            <Link href={`/login`}><a>로그인</a></Link>
        </>
    )
}

export default index