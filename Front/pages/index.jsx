
import {join_success} from '../api/api'
import { useState, useRef, useEffect } from 'react'
import { user_url } from '../store/Allurl'
import Main from './main'
import Header from '../components/header'
// import { w3cwebsocket as W3CWebSocket } from "websocket";


const index = ()=>{

    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("ws://127.0.0.1:8080");
        ws.current.onopen = () => console.log();
        ws.current.onclose = () => console.log();

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(() => {
        ws.current.onmessage = (e) => console.log(`websocket data : ${e.data}`)
    }, []);

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
            <Header />
            <Main/>
        </>
    )
}

export default index