// 1. JSX를 사용한 코드
class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World"/>,
    document.getElementById('root')
);

// 2. JSX를 사용하지 않은 코드
class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    React.createElement(Hello, { toWhat: "World" }),
    document.getElementById('root')
);