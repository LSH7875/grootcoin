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


const login_success = ()=>{
    const {state,dispatch} = useContext(Store)


    useEffect(async ()=>{
            localStorage.setItem('login_boolean',false)
            const storage_value = localStorage.getItem('login_boolean')
            console.log(`dispatch 작동${storage_value}`)
            dispatch({ type: 'login_boolean_true_middle', payload: false})
            console.log(`dispatch 작동${state.login_boolean}`)

        Router.push('/')

    },[])

    return(
        <>
        </>
    )
}

export default login_success