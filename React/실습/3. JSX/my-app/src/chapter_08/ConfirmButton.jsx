// src/chapter_08/ConfirmButton.jsx'
import React, { useState } from "react";


// 함수 컴포넌트
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

// 클래스 컴포넌트
// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isConfirmed: false,
//         }

//         this.handleConfirm = this.handleConfirm.bind(this);
//     }

//     handleConfirm() {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleConfirm}
//                     // disabled={this.state.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "O" : "X"}
//             </button>
//         )
//     }
// }

export default ConfirmButton;