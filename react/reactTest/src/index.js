// document.getElementById('app').innerHTML = "webpack work"
/*使用es6尖头函数 */
// var func = str => {
//   document.getElementById('app').innerHTML = str;
// };
// func('now i am using babel');
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store'
import getRouter from 'router/router';
// import Hello from './component/Hello/Hello';

/**初始化 */
renderWithHotReload(getRouter());
/**热更新 */
if(module.hot){
  module.hot.accept('./router/router',() => {
    const getRouter = require('router/router').default;
    renderWithHotReload(getRouter());
  });
}
function renderWithHotReload(RootElement){
  ReactDom.render(
    <AppContainer>
      <Provider store = {store} >
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
// ReactDom.render(
//     // <div>Hello React!</div>, document.getElementById('app')
//     getRouter(),document.getElementById('app')
//   );