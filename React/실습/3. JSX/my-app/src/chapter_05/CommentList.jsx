import React from "react";
import Comment from "./Comment"

// 댓글 배열을 만들어서 컴포넌트 합성 진행
const comments = [
    {
        name: "김민규",
        comment: "하잉"
    },
    {
        name: "윤제원",
        comment: "하잉ㅋㅋ"
    },
    {
        name: "허동혁",
        comment: "허동허동"
    },
]

function CommentList(props) {
    return (
        <div>
            {/* 생성된 comments 배열을 활용하여 합성 진행 */}
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>


    );
}

export default CommentList;