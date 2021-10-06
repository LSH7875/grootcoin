import { useState,useEffect } from "react"
import Styled from 'styled-components'

const Box = Styled.div`
    margin: 0 auto;
    width:1200px;
    height: 100%;
    
    &>img{
        width:1200px;
    }
    
    &>h1{
        width:100%;
        height:50px;
        font-weight:bold;
        background-color:rgba(32, 201, 150);
        text-align:center;
    }
    &>h1:before{
        content:"º";
    }
    &>.title{
        margin-top:50px;
    }

    &>ul{
    display:inline-block;
    margin-bottom:100px;
    text-align:center;
    }

    &>ul>li{
        font-size: 28px;
        font-weight: bold;
    }

    &>h4{
        text-indent: 20px;
    }
    
`


const coinInfo = () =>{
  
    return(
        <Box >
        <img src="/grooot.jpg"></img>
        <h1>groot coin🌳</h1>
        <h4>'K-Digital Training 블록체인 기반 핀테크 및 응용 SW 개발자 양성과정'의
        첫 번째 블록체인 프로젝트이며, BitCoin 기반으로 만들어진 코인이다</h4>

        <h1 className="title">why grootcoin?</h1>
        <h4>가지하나만 있어도 다시 부활하는 그루트의 끈질긴 생명력의 의미를 이어받아 그루트코인 떨어질대로 떨어져 바닥을 치더라도 죽지 않고 살아나 성공할 것이다.</h4>
        
        <h1 className="title">information</h1>
        <ul>
            <li>grootcoin 출시일 : 2021.10 </li>
            <li>총 grooutcoin 수 : 84,000 qty </li>
            <li>블록 생성 주기    : 2.5 minute  </li>
            <li>난이도 조절 주기    : 3.5 day  </li>
            <li>반감기   : 4 year </li>
            <li>채굴방식    : POW(작업증명)  </li>
        </ul>
        </ Box>
    )
}

export default coinInfo