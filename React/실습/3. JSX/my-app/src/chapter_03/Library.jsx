// Book 컴포넌트를 사용할 상위 컴포넌트 생성
import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            {/* Book 함수의 인자로 props(name, numOfPage) 넘겨주기 */}
            {/* 3개의 Book 컴포넌트 렌더링 */}
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;