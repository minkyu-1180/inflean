import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
}

// 리액트 클래스 컴포넌트
class Notification extends React.Component {
    // 생성자
    constructor(props) {
        super(props);
        // 생성자 안에서 현재 컴포넌트의 state 정의
        this.state = {};
    }
    // 생명주기 별 함수 호출 보기
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called`)
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called`)
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called`)
    }
    // 렌더링
    render() {
        return (
            // 렌더링 시 반환할 내용
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>

            </div>
        )
    }
}

export default Notification;