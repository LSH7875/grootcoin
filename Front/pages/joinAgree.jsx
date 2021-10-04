import Link from 'next/link'
import Styled from 'styled-components'
import React,{useState} from 'react'

const Box =Styled.div`
    margin: 0 auto;
    width:480px;
    height:485px;
    padding: 16px 24px 32px;
    margin-top:80px;
    padding-top:40px;
    text-align:center;

    ul,li{
        list-style:none;
    }

    &>h1{
        margin-bottom: 24px;
        font-size: 34px;
    }

    &>.bigCheck>li{
        display:inline-block;
    }
    &>.bigCheck>.bigCheck1{
        font-weight:bold;
        color:#1772f8;
        margin-right:10px;
    }

    & >h3{
        position: relative;
        display: flex;
        align-items: center;
        height: 56px;
        padding-left: 16px;
        border-radius: 8px;
        border: 1px solid #e4e5e8;
        font-size: 14px;
        font-weight: bold;
    }

    &>.smallCheck>li{
        text-align:left;

    }

    &>h5{
        font-size:12px;
        padding: 11px 16px;
        background-color: #f8f8f9;
        border: 1px solid #e4e5e8;
    }
    
    &>p{
        background-color: #c9ccd2;
        color: #79818f;
        opacity: .5;
        cursor: not-allowed;
        width: 100%;
        padding: 0 16px;
        height: 48px;
        font-size: 16px;
        display: inline-flex;
        flex: 0 0 auto;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        line-height: normal;
        font-weight: 400;
        font-style: normal;
        transition: background .25s,border .25s;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        touch-action: manipulation;
        outline: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    }
    &>a{
        background-color: #c9ccd2;
        color: #79818f;
        opacity: .5;
        cursor: not-allowed;
    }
`


const joinAgree = ()=>{
    const [checked,setChecked] = useState(false)
    let { checked0,checked1,checked2 } = false;

    const handleAllChecked = e =>{
        const {allChecked} = false
      
        setChecked({
            allChecked:!allChecked, 
            checked0:!allChecked,
            checked1:!allChecked,
            checked2:!allChecked
        })
    }
    return (
        <Box>
            <h1>회원가입</h1>
            <ul className="bigCheck">
            <li className="bigCheck1">① 약관동의</li><li> ------------- ② 정보입력</li>
            </ul>
            <label className="checkedAll">
                <input 
                    type="checkbox"
                    onClick={handleAllChecked} 
                    checked={checked}
               
                />
                모든 항목에 동의하기
            </label>
           
            <ul className="smallCheck">
            <li><input type="checkbox" value={checked0} name="checked0" id="checked0" required/> 코인원 이용약관</li>
            <li><input type="checkbox" value={checked1} name="checked1" id="checked1" required/> 개인정보 수집 및 이용</li>
            <li><input type="checkbox" value={checked2} name="checked2" id="checked2" /> 이벤트 및 정보 안내 수신(선택)</li>
            </ul>
            
        `

           <h5>- 19세 미만은 회원 자격이 없으며, 서비스 이용이 제한됩니다.</h5>

           <p><Link href={`/join`}><a>다음</a></Link></p>
        </Box>
    )
}

export default joinAgree