# React README
infrean의 강의 "처음 만난 리액트(React)"에 대한 강의 공부 내용을 정리하는 곳입니다
- HTML, CSS, JavaScript가 무엇인지 간단히 설명하고 있습니다.
- 리액트에 대한 내용을 설명하고, 프론트엔트 프레임워크로써의 리액트를 알려줍니다.

# 0108
0. 준비하기
- JS, HTML, CSS 등 기본 개념 익히기
- React를 적용하기 위한 사전준비
1. 리액트 소개
- 리액트의 개념이 무엇인지 소개하기
2. 리액트 시작하기
- html과 css가 적용된 웹에 react 적용하기
- create-react-app을 활용하여 react를 적용하고 프로젝트를 시작하기
3. JSX
- JSX와 JS 비교
- JSX를 사용하는 이유(vs JS)
4. Rendering Element
- React Element vs DOM Element
- React Element의 구조 파악(결국 html 태그...)


# 0109
까먹고 이날 공부한 내용을 README에 작성하지 못했다... 2일 지나고 하기 ㅠ
5. Components and Props
- React의 핵심
- Components는 붕어빵 틀, Props는 붕어빵 재료이다!
    - Props를 Components에 넣으면, 해당 재료로 만든 붕어빵(Elements)가 나온다
    - 클래스와 인스턴스 느낌 같음... Components는 현재 함수 컴포넌트가 주를 이룬다고 한다(클래스 컴포넌트는 잘 사용 X)
6. State and Lifecycle
- State : 상태
- State가 변경되었는지가 상당히 중요
    - Class Component에서만 생성자 내에서 State 변경 가능인데,,,, 위에서 배웠듯이 잘 안쓴다
    - Function Component는??? 불가능!!!! 나중에 배울 내용에 포함될 것...
- Lifecycle : 리액트 클래스 컴포넌트의 생명주기
    - 마운트 -> 업데이트 -> 언마운드
    - 함수들의 뜻이 명확해서 이해가 빨리 되었다.
    - componentDidMount
    - componentDidUpdate
    - componentWillUnMount


# 0110
이날은 상태가 안좋아서, 그리고 실습 과정에서 이상한 오류에 빠져서 해메느라 강의를 한 개 밖에 듣지 못했다
- Hook ? 낚아채기!!!!
- 중간에 끼어드는 것! 왜?
    - 함수 컴포넌트는 state 변경 불가.... 근데 변경하고 싶을 때는 어떡하지...?
    - 이를 Hook을 사용하여 변경하기!!
- Hook : 원래 존재하는 기능에 끼어들어서 함께 실행되는 것
    - 리액트에서는 이 함수가 Hooks 임을 알려주기 위해 앞에 "use"를 붙인다(.jsx 파일 만들 때 대문자로 시작하는데, 이경우는 특별한 듯?)

- Hook 규칙
    - Hook은 무조건 리액트 함수 컴포넌트의 최상위 레벨에서만 호출해야 한다
    - 리액트 함수 컴포넌트에서만 Hook을 호출해야 한다

# 0111
오늘 배운 내용은 Form과 Lifting State Up이었다
- Form은 내가 HTML에서 배운 Form과 비슷한 내용이었다.
    - 차이점 : HTML은 각 요소에 state가 존재하고, React는 Component 내부의 state에서 데이터를 관리
    - useState()를 이용하여, Event handle을 진행한다
    - state의 값이 변하면 handleChange(통용적으로 이렇게 부르는 듯), form을 제출하면 handleSubmit 진행
- Lifting State Up은 Vue의 Routing과 비슷한 느낌이었다
    - 하위 컴포넌트들에서 공용으로 사용하는 state를 부모 컴포넌트에서 정의하고, 이를 하위에서 공유하는 과정에서 진행되는 것(Lifting Up State : State를 끌어다 쓰는 느낌?)
    - 각 컴포넌트에서 정의되어있는 State를 차용한다
    - 이 개념은 주말에 반복해서 공부할 계획이다. 하루에 두 시간씩 리액트 강의를 들으며 공부했지만, 얕게 배우는 느낌이 들었고, 내 것이 아니라는 느낌이 든다..