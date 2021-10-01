const join = ()=>{
    return (
        <>
            <h1>회원가입</h1>
            <h6>① 약관동의 ------------- ② 정보입력</h6>

            <h2>이메일</h2>
            <input type="text" name="userid" placeholder="아이디로 사용할 이메일 입력" />
            
            <h2>비밀번호</h2>
            <input type="text" name="userpw" placeholder="아이디로 사용할 이메일 입력" />
            
            <input type="checkbox" name="agree1" required/> 코인원 이용약관
            <input type="checkbox" name="agree2" required/> 개인정보 수집 및 이용
            <input type="checkbox" name="agree3"/> 이벤트 및 정보 안내 수신(선택)


            <h5>- 19세 미만은 회원 자격이 없으며, 서비스 이용이 제한됩니다.</h5>

            <input type="submit" name="joinBtn" value="다음"/>
        </>
    )
}

export default join