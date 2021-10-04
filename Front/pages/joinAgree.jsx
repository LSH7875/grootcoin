import Link from 'next/link'
import Styled from 'styled-components'
import {useState} from 'react'

const Box =Styled.div`
    margin: 0 auto;
    width:480px;
    height:485px;
    margin-top:80px;
    padding-top:40px;
    text-align:center;

    ul,li{
        list-style:none;
    }
    a{
        text-decoration:none;
    }

    &>h1{
        margin-bottom: 24px;
        font-size: 34px;
    }

    &>.bigCheck{
        display:inline-block;
        text-align:center;
    }
    
    &>.bigCheck>li{
        display:inline-block;
        font-weight:bold;
        font-size:14px;
    }

    &>.bigCheck>.bigCheck1{
        font-weight:bold;
        color:rgba(32, 201, 150);;
        margin-right:5px;
    }

    & >.checkedAll{
        position: relative;
        display: flex;
        align-items: center;
        height: 56px;
        padding-left: 16px;
        border-radius: 8px;
        border: 1px solid #e4e5e8;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;

    }

    &>label>h3{
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
    }

    &>.smallCheck{
        width:100%;
        text-align:left;
        display:inline-block;
        margin-top:5px;
        font-size:14px;
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
    
    &>.bigBtn{
        background-color: #c9ccd2;
        color: #000;
        opacity: .5;
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
        font-weight: bold;
        font-style: normal;
        transition: .25s,border .25s;
        text-align: center;
        cursor: pointer;
    }

    
    &>.bigBtn>a{
        /* background-color: #c9ccd2; */
        color: #000;
        opacity: .5;
    }
    
    &>.bigBtn:hover{
        background:rgba(32, 201, 150);;
    }
    
    &>.bigBtn>a:hover{
        color:#fff;
    }
`


const joinAgree = ()=>{
    const [allChecked,setAllchecked] = useState(false);
    const [checked1,setChecked1] = useState(false);
    const [checked2,setChecked2] = useState(false);
    const [checked3,setChecked3] = useState(false);

    const handleAllChecked = e =>{
        setAllchecked(!allChecked);
        setChecked1(!allChecked);
        setChecked2(!allChecked);
        setChecked3(!allChecked);
    }

    const handleChecked1 = () => setChecked1(!checked1);
    const handleChecked2 = () => setChecked2(!checked2)
    const handleChecked3 = () => setChecked3(!checked3)

    // if( checked1 == true && checked2 == true){
        
    // }
    return (
        <Box>
            <h1>회원가입</h1>
            <ul className="bigCheck">
            <li className="bigCheck1">① 약관동의</li><li> ------------- ② 정보입력</li>
            </ul>
            <label className="checkedAll">
                <input 
                    type="checkbox"
                    checked={allChecked}
                    onChange={handleAllChecked}
                />
                모든 항목에 동의하기
            </label>
           
            <ul className="smallCheck">
            <li><label><input type="checkbox" checked={checked1} onChange={handleChecked1} name="Checked1" id="Checked1" required/> 코인원 이용약관</label></li>
            <li><label><input type="checkbox" checked={checked2} onChange={handleChecked2} name="Checked2" id="Checked2" required/> 개인정보 수집 및 이용</label></li>
            <li><label><input type="checkbox" checked={checked3} onChange={handleChecked3} name="Checked3" id="Checked3" /> 이벤트 및 정보 안내 수신(선택)</label></li>
            </ul>
           <h5>- 19세 미만은 회원 자격이 없으며, 서비스 이용이 제한됩니다.</h5>
           {checked1 ===true && checked2 === true ? <Link href={`/join`}><a className="bigBtn">다음</a></Link> : ''}
        </Box>
    )
}

export default joinAgree