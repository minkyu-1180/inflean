// Data Types

// Number Type : 숫자를 다루기 위한 자료형
// 정수나 소수 저장 
let n1 = 1234;
let n2 = 5.678;

// String Type : 문자열을 다루기 위한 자료형
// 큰 따옴표("") 혹은 작음 따옴표('')
let s1 = "Hello";
let s2 = 'world';

// Boolean Type : 값이 true 혹은 false인 자료형
let b1 = true;
let b2 = false;

// Null Type : 고의적으로 데이터 타입을 null로 저장
let n = null; 

// Undefined Type : 정의가 되지 않은 데이터에 대한 자료형
let u1;
let u2 = undefined;

// Array Type : 배열을 나타내는 자료형
// 배열 : 여러 가지 변수들을 순서대로 모아 놓은 것
// JS에서는 다양한 Data Type의 변수들을 함께 모아놓을 수 있음
// 인덱스 : 배열에 포함되는 원소의 순서를 나타내는 값(0부터 시작)
let arr = [1, 2, 3, 4];

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["h", "e", "l", "l", "o"];
let arr3= [1, "h", 2, "i"];
let arr4 = [true, 1 , undefined, false, "h", 2, null, "i"];

console.log(arr1[0]);
coonsole.log(arr2[1]);
console.log(arr3[2]);
console.log(arr4[3]);

// Object Typed
let obj = { a: "apple", b: "banana", c: "carrot" };

let obj1 = { a: "apple", b: "banana", c: "carrot" };
let obj2 = { a: 1, b: 2, c: 3 };
let obj3 = { a: "Hello", b: 100, c: [1, 2, 3, 4] };

let obj4 = {
    a: { a1: 1, a2: 2 },
    b: { b1: 3, b2: 4 },
    c: { c1: 5, c2: 6 },
};

console.log(obj1["a"]);
console.log(obj2.a);
console.log(obj3["c"]);
console.log(obj4.c.c2);