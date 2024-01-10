import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {   
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;


class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    // mount 후 호출
    componentDidMount() {
        const { notifications } = this.state;
        // 1초마다 정해진 작업 시행
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                // state를 업데이트 하기 위해 setState 함수 활용
                this.setState({
                    // notifications: [],
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                        // key : 리액트 엘리먼트를 구분하기 위한 고유값
                        // map 함수 사용 시 반드시 넣어야 함(alert message 나옴)
                        key={notification.id}
                        id={notification.id}     
                        message={notification.message} />;
                })}
            </div>
        )
    }
}

export default NotificationList;