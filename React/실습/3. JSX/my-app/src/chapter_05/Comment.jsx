import React from "react";

// 컴포넌트에 적용할 스타일도 작성해 봐요!
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        // 너도 JS의 후손이라 이거냐? camelCase?
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

// 위에서 만든 style을 적용해 보아요
function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                style={styles.image} 
            />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>
                    {props.comment}
                </span>
            </div>

        </div>
    );
}

export default Comment;