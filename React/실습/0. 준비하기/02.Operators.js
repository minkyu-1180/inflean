// Operators

// 대입 연산자
let a = 10;
let b = 20;
console.log(a);
console.log(b);

// 산술 연산자
console.log(a+b);   // 30
console.log(a-b);   // -10
console.log(a*b);   // 400
console.log(a/b);   // 0.5
console.log(a%b);   // 10
console.log(a**b);  // ??

// 단축 연산자
a += b;     // a = a + b = 30
a -= b;     // a = a - b = 10
a *= b;     // a = a * b = 200
a /= b;     // a = a / b = 10
a %= b;     // a = a % b = 10
a **= b;    // a = a**b = ???

// 증가 연산자 / 감소 연산자
let e = 1;
// 전위 연산자
let f = ++e; // f에 e+1을 할당(증감 후 반환)
let g = e++; // g에 e 할당 후 e+=1
console.log(e, f, g) // 3, 2, 2

// 관계 연산자
let num1 = 1;
let num2 = 2;
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 > num2);
console.log(num1 >= num2);

// 동등 연산자(==, !=)
let n = 1;
let s = '1';

console.log(n == s); // 값은 같음(1로) -> true
// 일치 연산자(===, !==)
console.log(n === s); // 값은 같지만 자료형이 다름 -> false


// ㅏㅇㄴㅁㅇㅇㄹㅇㄴ