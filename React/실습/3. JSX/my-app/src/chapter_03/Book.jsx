// chapter_03/Book.jsx
// Book이라는 이름의 함수 컴포넌트 생성
import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`}</h2>
        </div>
    );

}

export default Book;