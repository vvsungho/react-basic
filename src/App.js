import React, {Component, Fragment} from 'react';
import MyName from './MyName'
import MyName2 from './MyName2'
import Counter from './Counter'
import MyComponent from './MyComponent'

class App extends Component {
    state = {
        counter: 1,
        isError: false
    }
    /**
     * constructor
     * 컴포넌트가 생성될 때 호출되는 함수
     * super props -> 컴포넌트를 만들 때 Component가 가지고 있는 생성자를 호출해주고 다음 절차
     * 문법이라고 생각하면 될 듯
     */
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    /**
     * componentDidMount
     * 외부 라이브러리 연동 혹은 다른 컴포넌트에서 필요한 데이터를 요청하거나 (Ajax), DOM에 관련된 작업 (스크롤, 크기 읽어오기) 등등
     */
    componentDidMount() {
        console.log('componentDidMount')

        /**
         * ref
         * 특정 DOM에 id를 부여하여 정보를 가져옴. DOM 스크롤 위치라던지.. DOM 크기라던지..
         */
        console.log(this.myDiv.getBoundingClientRect())
    }

    /**
     * 컴포넌트에 에러가 발생했을 때 실행되는 함수, 에러 캐치
     * Example
     * Component에서 없는 값을 정의할 때
     * error -> 에러 종류
     * errorInfo -> 에러 정보
     * 예상치 못한 에러가 발생했을 때
     * Example
     * 사용자에겐 "오류가 발생했습니다." 라고만 노출하고 개발자가 자세한 에러 확인 처리할 때 사용
     * 간혹 에러가 나면 화면이 랜더링이 안되는 문제가 있는데 에러페이지 노출할 때 종종 사용
     * 에러가 발생할 수 있는 컴포넌트의 부모 컴포넌트에 정의해야함
     */
    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
        console.log('error', error);
        console.log('errorInfo', errorInfo);

        this.setState({
            isError: true
        });
    }


    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    render() {
        const name = '윤성호';
        return (
            <Fragment>
                <div ref={ref => this.myDiv = ref} />
                {
                    // counter가 10보다 작을 때 MyComponent 노출
                    // counter가 10이 돼서 MyComponent가 안보이는 시점에 MyComponent클래스의 componentWillUnmount 실행
                }
                {this.state.counter < 10} && <MyComponent value={this.state.counter} />
                <button onClick={this.handleClick}>click me!</button>
                <br />
                =====================================
                <br />
                <div>
                    <h1>안녕하세요 {name}님</h1>
                </div>
                <div>{1 + 1 === 2 ? '맞다' : '틀리다'}</div>
                <div>{1 + 1 === 2 && '맞다'}</div>
                <div>
                    {(function () {
                        if (name === '윤성호') {
                            return '맞다';
                        } else {
                            return '틀리다';
                        }
                    })()}
                </div>
                <div>
                    {() => {
                        if (name === '윤성호') {
                            return '맞다';
                        } else {
                            return '틀리다';
                        }
                    }}
                </div>
                <br/>
                ==========================
                <br/>
                <MyName name="윤성호"/>
                <MyName2 name="윤성호2"/>
                <br/>
                ==========================
                <br/>
                <Counter />
            </Fragment>
        );
    }
}

export default App;
