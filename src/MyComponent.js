import React, {Component} from "react";

class MyComponent extends Component {
    state = {
        value: 0
    }

    /**
     * static getDerivedStateFromProps
     * 컴포넌트가 업데이트 될 때 실행되는 함수
     * 값이 변경됐을 때 실행되는 함수
     * props와 state를 맞춰줄 때 사용
     * nextProps -> 다음으로 받아올 props 값
     * preState -> 업데이트 되기 전 상태 값
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('static getDerivedStateFromProps')
        if (prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            };
        }
        // 변경할 것이 없을 때
        return null;
    }

    /**
     * 컴포넌트 업데이트 성능 최적화
     * 특정 조건에 따라 랜더링을 막아줄 수 있는 함수
     * return false -> 업데이트 X
     * return true -> 업데이트 O
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')

        // value가 10일 때 DOM 업데이트(랜더링)를 하지 않음
        if (nextProps.value === 10) {
            return false;
        }

        return true;
    }

    /**
     * getSnapshotBeforeUpdate
     * 컴포넌트가 업데이트돼서 브라우저에 반영되기 바로 직전 호출되는 함수
     * 업데이트 바로 직전의 DOM 상태를 return, return 값을 컴포넌트에서 받아서 사용할 수 있음
     * Example
     * click을 할 때마다 div item이 추가되는 이벤트가 있다.
     * div item이 추가됨으로써 스크롤이 길어지지만 item이 많아져 스크롤이 길어져도 현재 스크롤 위치를 유지시키고 싶다.
     * getSnapshotBeforeUpdate은 돔이 그려지기 바로 직전이므로 스크롤 정보를 가져와 가져온 스크롤 위치를 통해 스크롤 위치를 설정할 수 있다.
     * getSnapshotBeforeUpdate에 return되는 값을 componentDidUpdate(a, b, c)의 3번째 파라미터로 받아올 수 있다.
     *
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.value === 10) {
            const {
                scrollTop,
                scrollHeight
            } = {
                scrollTop: 300,
                scrollHeight: 300
            }

            return scrollTop, scrollHeight;
        }
    }

    /**
     * componentDidUpdate
     * 컴포넌트가 업데이트되고 나서 실행되는 함수
     * 특정 props, state가 바뀌면 실행
     */
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('componentDidUpdate')
        console.log('snapShop', snapShot)
        if (this.props.value !== prevProps.value) {
            console.log('값이 바뀌었다.')
        }
    }

    /**
     * componentWillUnmount
     * 컴포넌트가 제거될 때 실행되는 함수. 제거 시점에 불필요할 때 없애는 함수
     */
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div>
                <p>props: {this.props.value}</p>
                <p>state: {this.state.value}</p>
            </div>
        );
    }
}

export default MyComponent