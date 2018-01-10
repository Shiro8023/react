import React,{Component} from 'react';
import PropTypes from 'prop-types';
class CommentInput extends Component{
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor(){
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  componentWillMount(){
    this._loadUsername()
  }
  componentDidMount(){
    this.textarea.focus()
  }

  __saveUsername(username){
    localStorage.setItem('username',username)
  }
  _loadUsername(){
    const username = localStorage.getItem('username')
    if(username){
      this.setState({username})
    }
  }
 
  //持久化用户名
  handUsernameBlur(event){
    this.__saveUsername(event.target.value)

  }
  
  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })

  }
  handleContentChange(event){
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit(){
    if(this.props.onSubmit){
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: + new Date()
      })
      // const { username ,content } = this.state
      // this.props.onSubmit({username , content})
    }
    this.setState({
      content: ''
    })
  }

  render(){
    return(
      <div className='commment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名:</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onBlur={this.handUsernameBlur.bind(this)} onChange={this.handleUsernameChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容:</span>
          <div className='comment-field-input'>
          <textarea ref={(textarea) => this.textarea = textarea }value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>

        </div>
      
      </div>
    )
  }
}
export default CommentInput