function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);
    console.log(isClicked)
    console.log(setIsClicked)
    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? "Clicked!" : "Click Here!"
    )
}
// id가 root인 document 가져오기
// 리액트 돔에 렌더 함수 사용 -> 리액트 컴포넌트를 돔 컨테이너에 렌더링
const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);