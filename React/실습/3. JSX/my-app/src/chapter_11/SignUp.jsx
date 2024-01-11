// my-app/src/chapter_11/SignUp
import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender,setGender] = useState("");
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeGender = (event) => {
        setGender(event.target.value);
        
    }
    const handleSubmit = (event) => {
        alert(`이름 : ${name} 성별 : ${gender}`);
        console.log(event.target);
        console.log(gender)
        // if (gender in ["남자", "여자"]) {
        // } else {
            //     alert("똑바로 골라라")
            // }
            event.preventDefault();
            
        };
        console.log(name, gender);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <label>
                성별 : 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
                </label>
            <button type="submit">제출하기</button>
        </form>
    );
}
export default SignUp;