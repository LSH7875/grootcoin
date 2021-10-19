import Store from '../store/context'
import Router from 'next/router'
import React, { useContext, useEffect } from 'react'


const Logout = () => {

    const {state,dispatch} = useContext(Store)

    useEffect(()=>{
        localStorage.setItem('login_boolean',true)
        dispatch({ type: 'logout', payload: true})
        setTimeout(()=>{
            Router.back()
        },1000)
    },[])

    return (
        <>
            Logout..
        </>
    )
}

export default Logout