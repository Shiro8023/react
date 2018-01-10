import React,{Component} from 'react';
import './Home.css'
// import Home from '../../component/Hello/Hello';
class Home extends React.Component{
  render (){
    return (
      <div>
      <Name name={this.props.name}/>
      <Link site={this.props.site}/>
      <LikeButton />
    </div>

    )
   
  }
}
class Name extends Component{
  // liked: ! this.state.liked
  render() {
    return (
      <h1>{this.props.name}</h1>
    )
  }
}
class Link extends Component{
  render() {
    return (
      <h1>{this.props.site}</h1>
    )
  }
}

class LikeButton extends React.Component{
  getInitialState () {
    return {
      liked:false
    }
  }
  render() {
    var text = this.state.liked ?'like':'not like';
    return (
     <p onClick = {this.handleClick}>
    if you {text} me , click me to change state!
     </p>
    )
  }
}
export default Home;