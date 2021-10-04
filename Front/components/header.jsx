import Link from 'next/link'

const header = ()=>{
    return(
        <div id="header">
            <div>
                <img className="logo" src="/grootcoin.png"/>
            </div>
            <div>
                <ul id="nav">
                    <li><Link href={`/`}><a>Home</a></Link></li>
                    <li><Link href={`/coinNews`}><a>코인뉴스</a></Link></li>
                    <li><Link href={`/assets`}><a>자산</a></Link></li>
                    <li><Link href={`/coinInfo`}><a>ⓘgrootcoin</a></Link></li>
                </ul>
            </div>
            <Link href={`/login`}><a className="login Btn">로그인</a></Link>
            <Link href={`/joinAgree`}><a className="join Btn">회원가입</a></Link>
        </div>
    )
}

export default header