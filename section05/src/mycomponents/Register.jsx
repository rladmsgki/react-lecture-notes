import { useState,useRef } from "react";
// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개
const Register = () => {

  const [input, setInput] =useState({
    name:"",
    birth:"",
    country:"",
    bio:"",
  });
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) =>{
    countRef.current ++;   
    console.log(countRef.current);   //수정 횟수를 콘솔에 출력
    setInput({
      ...input, 
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = () => {
    if(input.name ===""){
      //이름을 입력하는 DOM 요소 포커스 (선택된 상태로 만들기)
      //-> Reference 객체 이용
      inputRef.current.focus();
    }
  };
 
  return (  
  <div>
    
    <div>    
      <input
        ref={inputRef}
        name="name"
        value={input.name} 
        onChange={onChange} 
        placeholder={"이름"}
      />
    </div>

    <div>
      <input 
      name="birth"
        value={input.birth} 
        onChange={onChange} 
        type="date"
        />
    </div>

    <div>
      <select 
      name="country"
        value={input.country} 
        onChange={onChange}>
        <option value=""></option>
        <option value="kr">한국</option>
        <option value="us">미국</option>
        <option value="uk">영국</option>
      </select>
    </div>

    <div>
      <textarea 
        name="bio" 
      value={input.bio} 
      onChange={onChange} />
    </div> 
    
    <button onClick={onsubmit}>제출</button>
  </div>
  );   
};

export default Register;