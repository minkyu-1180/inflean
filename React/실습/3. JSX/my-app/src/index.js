// index.js 파일
// 우리가 만든 컴포넌트를 실제로 렌더링하기
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./chapter_03/Library"
import Clock from "./chapter_04/Clock"
// chapter_03 실습
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// setInterval 함수를 사용하여
// 1000ms마다 새롭게 Clock 함수 컴포넌트를 rood div에 렌더링
// 매 초마다 Clock 컴포넌트의 엘리먼트가 새롭게 생성
// React 18의 최신 가져오기 방법에서
// ReactDOM은 더 이상 사용 X
// -> const root = ReactDom.createRoot(document.getElementById("root"));로 가져오기

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
