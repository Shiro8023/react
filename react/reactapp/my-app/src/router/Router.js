// eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import First from '../pages/First/First';
import Second from '../pages/Second/Second';
// import './router.css';
const getRouter = () => (
  <Router>
    <div className="container">
      <div className="row">
        <div className="span12">
          <ul>
            <li>
              <Link to="/">首页介绍</Link>
            </li>
            <li>
              <Link to="/first">第一个</Link>
            </li>
            <li>
              <Link to="/second">第二个</Link>
            </li>
          </ul>      
        </div>
      </div>
      
      <Switch>
        <Route exact path="/" componment={Home}/>
        <Route  path="/first" componment={First}/>
        <Route  path="/second" componment={Second}/>
      </Switch>
    </div>

  </Router>
)
export default getRouter;
