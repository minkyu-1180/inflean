// my-app/src/chapter_10/AttendanceBook

import React from "react";

const students = [
    {   
        id: 1,
        name: "김민규",
    },
    {   
        id: 2,
        name: "김효진",
    },
    {
        id: 3,
        name: "손영훈",
    },
    {
        id: 4,
        name: "신소현",
    },
    {
        id: 5,
        name: "정해진",
    },
    {
        id: 6,
        name: "조재효",
    },
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id : ${student.id}`}> : {student.name}</li>;
            })}
        </ul>

    );
}

export default AttendanceBook;