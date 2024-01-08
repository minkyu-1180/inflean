# ES6
## JavaScript의 Array 객체에 대한 소개
[참고링크](https://developer.mozila.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Array
Array 객체 : 여러 항목의 컬렉션을 단일 변수 이름 아래 저장할 수 있고, 일반적인 배열 연산을 수행하기 위한 자료형
- JS에서 배열 : 원시값 X
    - JS의 배열은 크기 조정 가능
    - 다양한 데이터 형식을 혼합하여 저장
    - 연관 배열 X -> 임의의 문자열을 인덱스로 사용하여 배열 요소에 접근 X
        - 음수가 아닌 정수(또는 해당 수의 문자열 형식)를 인덱스로 사용하여 접근
    - JS 배열은 첫 번째 요소는 인덱스 0, 두 번째 요소는 인덱스 1, ..., 마지막 요소는 배열의 length 속성(Array.length) 값에서 1을 뺀 값에 위치
    - JS 배열 복사 연산 : 얕은 복사본 생성

### length와 숫자 속성의 관계
JS 배열의 length 속성은 숫자 속성과 연결
- 내장 배열 메서드 중 일부(ex. join(), slice(), indexOf(), ..)는 호출 시 배열의 length 속성 값을 고려
- push(), splice() 등의 메서드도 배열의 length 속성 갱신
```javascript
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango"; // 이거 됩니다!
console.log(fruits[5]); // mango
console.log(Object.keys(fruits)) // 객체의 key값(여기선 인덱스값) // ['0', '1', '2', '5']
console.log(fruits.length); // 6(배열에서 가장 큰 인덱스 값 + 1)

// length를 늘리면 -> 빈 슬롯이 추가된다(empty)
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

// length 속성을 줄일 경우, 요소 삭제
fruits.length = 2;
console.log(fruits); // ['banana', 'apple']
```

### 복사 메서드와 변경 메서드(mutating method)
복사 : 항상 얕게 이루어짐
- 객체 : 객체 참조가 새 배열로 복사
    - 원래 배열과 새 배열 모두 동일 객체 참조(참조된 객체 수정 -> 변경 사항이 새 배열과 원래 배열 모두에 표시)
    - String, Number, Boolean 등의 원시 type : 해당 값이 새 배열에 복사
```javascript
// 변경 메서드 vs 무변경 메서드
arr.copyWithin(0, 1, 2); // arr을 변경함
const arr2 = arr.slice().copyWithin(0, 1, 2); // arr을 변경하지 않음
const arr3 = [...arr].copyWithin(0, 1, 2); // arr을 변경하지 않음

```