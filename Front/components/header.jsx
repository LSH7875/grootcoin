import Link from 'next/link'
import React, { useContext } from 'react'
import Store from '../store/context'

const header = ()=>{

    const {state,dispatch} = useContext(Store)
    console.log(state.login_boolean == false)

    return(
        <div id="headerBar">
            <div id="header">
                <div>
                    <Link href={`/`}><a><img className="logo" src="/grootlogo.png"/></a></Link>
                </div>
                <div>
                    <ul id="nav">
                        <li><Link href={`/`}><a>Home</a></Link></li>
                        <li><Link href={`/coin/coinNews`}><a>코인뉴스</a></Link></li>
                        <li><Link href={`/coin/assets`}><a>자산</a></Link></li>
                        <li><Link href={`/coin/coinInfo`}><a>ⓘgrootcoin</a></Link></li>
                    </ul>
                </div>
                { state.login_boolean === 0 ? 
                    <>
                        <Link href={`/login`}><a className="login Btn">로그인</a></Link>
                        <Link href={`/joinAgree`}><a className="join Btn">회원가입</a></Link>
                    </>
                    :
                    <Link href={`/logout`}><a className="logout Btn">로그아웃</a></Link>
                                    
                } 
            </div>
        </div>
    )
}

export default header