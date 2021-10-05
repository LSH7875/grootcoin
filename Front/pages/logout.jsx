import Store from '../store/context'
import Router from 'next/router'
import React, { useContext, useEffect } from 'react'


const Logout = () => {

    const {state,dispatch} = useContext(Store)

    useEffect(()=>{
        dispatch({ type: 'logout' })

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