import React, { Component } from "react";

class MyName extends Component {
    // props default를 지정하는 방법1
    static defaultProps = {
        name: '기본이름'
    }
    render() {
        return (
            <div>
                 안녕하세요. 제 이름은 <u>{this.props.name}</u> 입니다.
            </div>
        );
    }
}

// props default를 지정하는 방법2
MyName.defaultProps = {
    name: '기본이름'
}

export default MyName;