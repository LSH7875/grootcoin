import Link from 'next/link'
import Styled from 'styled-components'
import {useState} from 'react'


const joinAgree = ()=>{
    const [allChecked,setAllchecked] = useState(false);
    const [checked1,setChecked1] = useState(false);
    const [checked2,setChecked2] = useState(false);
    const [checked3,setChecked3] = useState(false);

    const handleAllChecked = () =>{
        setAllchecked(!allChecked);
        setChecked1(!allChecked);
        setChecked2(!allChecked);
        setChecked3(!allChecked);
       
     }

    const handleChecked1 = () => {
    console.log(allChecked,11)
    console.log(checked1)

        setChecked1(!checked1);
       
    }
    const handleChecked2 = () => {
        setChecked2(!checked2)
        
    }
    const handleChecked3 = () => {
        setChecked3(!checked3)
      
    }

    const allChk = () =>{
        if(checked1 === true  &&  checked2 === true  &&  checked3 === true){
            return true
        }else if(checked1 !== true || checked1 !== true || checked1 !== true){
            return false
        }else{
            return
        }
    }
    // if( checked1 == true && checked2 == true){
        
    // }

    return (
        <div id="box">
            <h1>회원가입</h1>
            <ul className="bigCheck">
            <li className="bigCheck1">① 약관동의</li><li> ------------- ② 정보입력</li>
            </ul>
            <label className="checkedAll">
               {allChk() ? <input                    
                    type="checkbox"
                    checked={true}
                    onChange={handleAllChecked}
                    /> :  <input 
                    type="checkbox"
                    checked={false}
                    onChange={handleAllChecked}
                />}
                모든 항목에 동의하기
            </label>
           
            <ul className="smallCheck">
            <li><label><input type="checkbox" checked={checked1} onChange={handleChecked1} name="Checked1" id="Checked1" required/> 코인원 이용약관</label></li>
            <li><label><input type="checkbox" checked={checked2} onChange={handleChecked2} name="Checked2" id="Checked2" required/> 개인정보 수집 및 이용</label></li>
            <li><label><input type="checkbox" checked={checked3} onChange={handleChecked3} name="Checked3" id="Checked3" /> 이벤트 및 정보 안내 수신(선택)</label></li>
            </ul>
           <h5 className="warningText">- 19세 미만은 회원 자격이 없으며, 서비스 이용이 제한됩니다.</h5>
           {checked1 ===true && checked2 === true ? <Link href={`/join`}><a className="agreeBigBtn">다음</a></Link> : ''}
        </div>
    )
}

export default joinAgree