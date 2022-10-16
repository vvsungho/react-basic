import React, { Component, Fragment } from 'react';
import MyName from './MyName'
import MyName2 from './MyName2'

class App extends Component {
  render() {
    const name = '윤성호';
    return (
        <Fragment>
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
          <MyName name = "윤성호" />
          <MyName2 name = "윤성호2" />
        </Fragment>
    );
  }
}

export default App;
