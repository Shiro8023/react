// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * 函数定义组件
 * @param {*} props 
 */
function Square(props) {
  if(props.highlight){
    return (
      <button className="square" onClick={props.onClick} style={{color: "red"}}>
        {props.value}
      </button>
    )

  }else{
    return (
      <button className="square" onClick={()=> props.onClick()} >
        {props.value}
      </button>
    )
    
  }
 
}
class Board extends React.Component {
 //将board中的状态数据全部转移到game组件中 通过props 获取从game传递下来的数据和事件状态
  renderSquare (i) {
    return (
    <Square  
      key = {i} 
      value={this.props.squares[i]} 
      onClick={() => this.props.onClick(i)}
      highlight={this.props.winnerLine.includes(i)}
    />
  )
  }
  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if(winner){
    //   status = 'Winner: '+ winner;
    // }else{
    //   status = 'Next player: '+ (this.state.xIsNext ? 'X': 'O');
    // }
    // const status = "Next palyer:" + (this.state.xIsNext ? 'X' : 'O');
    var rows = [];
    for(var i = 0;i< 3;i++){
      var row = [];
      for(var j=3*i;j<3*i+3;j++){
        row.push(this.renderSquare(j));
      }
      rows.push(<div className="board=row" key={i}>{row}</div>)
    }
    return (
      <div>
        {rows}
        {/* <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div> */}
      </div>
    )
  }
}
class Game extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     history: [{
  //       squares: Array(9).fill(null)
  //     }],
  //     stepNumber: 0,
  //     xIsNext: true
  //   }
  // }
  constructor() {
    super();
    this.state = {
      history:[{
        squares: Array(9).fill(null),
        lastStep: 'Game start'
      }],
      xIsNext: true,
      stepNumber: 0,
      sort: false
    }
  }
 
  handleClick(i){
    // const history = this.state.history.slice(0,this.state.stepNumber + 1);
    // const current = history[history.length - 1];
    // const squares = current.squares.slice();
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    
    if(calculateWinner(squares).winner || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const location = '('+(Math.floor(i/3)+1)+','+((i%3)+1)+')';
    const desc = squares[i]+ 'moved to '+location;
    this.setState(
      {
        history: history.concat([{
          squares:squares,
          lastStep: desc
        }]),
        // squares: squares,
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      }
    )
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
      // xIsNext: (step % 2) === 0 
    })
  }
  toggleSort() {
    this.setState({
      sort: !this.state.sort
    })
  }
 
  render() {
    let history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares).winner;
    const winnerLine = calculateWinner(current.squares).line;
    let status;
    if(winner){
      status = 'winner:'+ winner;
    }else{
      status = 'Next player:'+(this.state.xIsNext ? 'X': 'O');
    }
    if(this.state.sort){
      history = this.state.history.slice();
      history.reverse();
    }
    //悔棋
    const moves = history.map((step,move) =>{ 
      // const desc = move ? ' Go to Move # '+ move : 'Game start';
      const desc = step.lastStep;
      if(move === this.state.stepNumber){
        return (
          <li key={move}>
            <button  onClick={() => this.jumpTo(move)}>
              <strong>{desc}</strong>
            </button>
          </li>
        )
      }
      return (
        <li key={move}>
          <button  onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    // let status;
    // if(winner) {
    //   status = 'winner'+ winner;
    // }else {
    //   status = 'Next player' + (this.state.xIsNext ? 'X' : 'O')
    // }
    return (
      <div className="game">
       <div className="game-board">
        <Board 
         squares = {current.squares}
         onClick = {(i) => this.handleClick(i)}
         winnerLine = {winnerLine}  
        />
       </div>
       <div className="game-info">
        <div>{status}</div>
        <button onClick={() => this.toggleSort()}></button>
        <ol>{moves}</ol>
       </div>
      </div>
    )
  }
}
function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i = 0 ;i< lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a]&& squares[a] === squares[b] && squares[a] === squares[c]){
      // return squares[a];
      return {winner:squares[a],line:[a,b,c]}
    }
  }
  // return null;
  return {winner:null,line:[]}
}
ReactDOM.render(
  <Game/>,
  document.getElementById('root')
)