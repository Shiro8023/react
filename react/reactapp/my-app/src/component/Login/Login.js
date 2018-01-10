import React, {Component} from 'react';
import './Login.css'

export default class Home extends Component {
  render () {
    return (
      // <div className="header">
      // <h1>登录页面</h1>
      // </div>
      <div className = "main">
        {/* <img src=""/> */}
        <div className ="container">
          <input type="text" placeholder = "请输入手机号或用户名" />
        </div>
        <div className ="">
          <input type="password" placeholder = "请输入密码"/>
        </div>
        <div className ="">
          <input type="radio"/> <span>是否记住用户名</span>
        </div>
        <div>
          <button>登录</button>
        </div>
      </div>
      //绝对值法 三栏布局
      // <div className="body">
      // <div id="left"></div>
      // <div id="main"></div>
      // <div id="right"></div>
      // </div>
    
      // <div className="body">
      //   <div id="left"></div>
      //   <div id="right"></div>
      //   <div id="main"></div>
      // </div>
    )
  }

}