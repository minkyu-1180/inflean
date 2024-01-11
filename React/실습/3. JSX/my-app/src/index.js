// index.js 파일
// 우리가 만든 컴포넌트를 실제로 렌더링하기
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chapter_03/Library"
import Clock from "./chapter_04/Clock"
import CommentList from "./chapter_05/CommentList";
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';

const root = ReactDOM.createRoot(document.getElementById("root"));

// chapter_03 실습
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  //   <React.StrictMode>
  //     <Library />
  //   </React.StrictMode>
  // );
  
// chapter_04 실습
// setInterval 함수를 사용하여
// 1000ms마다 새롭게 Clock 함수 컴포넌트를 rood div에 렌더링
// 매 초마다 Clock 컴포넌트의 엘리먼트가 새롭게 생성
// React 18의 최신 가져오기 방법에서
// ReactDOM은 더 이상 사용 X
// -> const root = ReactDom.createRoot(document.getElementById("root"));로 가져오기

// const root = ReactDOM.createRoot(document.getElementById("root"));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//   );
// }, 1000);

// chapter_05 실습
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// )

// chapter_06 실습
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// )

// chapter_07 실습
// root.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>
// )

// chapter_09 실습
// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>
// )

// chapter_10 실습
// root.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>
// )

// chapter_11 실습
// root.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>
// )

// chapter_12 실습
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
