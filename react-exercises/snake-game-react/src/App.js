import React from 'react';
import './App.css';
import Snake from './components/snake';
import Bait from './components/bait';
import Score from './components/score';
import DifficultyLevel from './components/difficultylevel';
import Instructions from './components/instructions';
import Gameover from './components/gameover';
import point from './sound/smb_coin.wav';
import gameOver from './sound/smb_mariodie.wav';


const getRandomPositionForBait = () => {
  let min = 1, max = 98;
  let x = Math.floor((Math.random() * (min + (max - min + 1))) / 2) * 2;
  let y = Math.floor((Math.random() * (min + (max - min + 1))) / 2) * 2;
  return [x, y];
}

class App extends React.Component {
  
  state = {
    bait: getRandomPositionForBait(),
    speed: 0,
    direction: 'R',
    isGameOver: false,
    gameOverReason: '',
    isNear: false,
    score: 0,
    highScore: 0,
    snake: [...Array(5).keys()].map(x => [0, 2*x])
  }

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate(){
    let headOfSnake = this.state.snake[this.state.snake.length - 1];
    if((headOfSnake[0] > 98 || headOfSnake[1] > 98 || headOfSnake[0] < 0 || headOfSnake[1] < 0) && !this.state.isGameOver){
      this.gameOver('Boundary Collision!!!');
    }
  }

  onKeyDown = (event) => {
    if(event.keyCode === 38 && this.state.direction !== 'D')
      this.setState({direction: 'U'});  
    if(event.keyCode === 39 && this.state.direction !== 'L')
      this.setState({direction: 'R'});
    if(event.keyCode === 40 && this.state.direction !== 'U')
      this.setState({direction: 'D'});  
    if(event.keyCode === 37 && this.state.direction !== 'R') 
      this.setState({direction: 'L'});
    
  }

  moveSnake = () => {
    let snakeDots = [...this.state.snake];
    let headOfSnake = snakeDots[snakeDots.length - 1];
    if(this.state.direction === 'R')
      headOfSnake = [headOfSnake[0] ,headOfSnake[1] + 2];
    else if(this.state.direction === 'L')
      headOfSnake = [headOfSnake[0] ,headOfSnake[1] - 2];
    else if(this.state.direction === 'D')
      headOfSnake = [headOfSnake[0] + 2,headOfSnake[1]];
    else
      headOfSnake = [headOfSnake[0] - 2,headOfSnake[1]];

      //self collision
      if(JSON.stringify(snakeDots).indexOf(JSON.stringify(headOfSnake)) >= 0){
        this.gameOver('Self Collision!!!');
      }

    snakeDots.push(headOfSnake);
    snakeDots.shift();

    if((Math.abs(this.state.bait[0] - headOfSnake[0]) < 15) 
        && (Math.abs(this.state.bait[1] - headOfSnake[1]) < 15)) {
      this.setState({isNear: true})
    } else {
      this.setState({isNear: false})
    }

    //found
    if(this.state.bait[0] === headOfSnake[0] && this.state.bait[1] === headOfSnake[1]){
      document.getElementById('pointSound').play();
      snakeDots.push(headOfSnake);
      this.setState({snake: snakeDots,
                     bait: getRandomPositionForBait(),
                     score: this.state.score + 1,
                     highScore: Math.max(this.state.highScore, this.state.score + 1)})
    }

    this.setState({snake: snakeDots});
  }

  setSpeed = (difficulty) => {
      switch(difficulty){
        case 'easy':
          this.setState({speed: 1});
          break;
        case 'medium':
          this.setState({speed: 2});
          break;
        case 'hard':
          this.setState({speed: 3});
          break;
        case 'pesto':
          this.setState({speed: 6});
          break;
        default:
          break;
      }
  }

  start = () => {
    if(this.state.speed !== 0 && !this.state.isGameOver)
      window.myTimer = setInterval(this.moveSnake, (200/this.state.speed));
  }

  gameOver = (reason) => {
    clearInterval(window.myTimer);
    this.setState({isGameOver: true,gameOverReason: reason});
    let gameOverSound = document.getElementById('gameOverSound');
    gameOverSound.volume = 0.5;
    gameOverSound.play();
  } 

  reset = () => {
    clearInterval(window.myTimer);
    this.setState({
      bait: getRandomPositionForBait(),
      snake: [...Array(5).keys()].map(x => [0, 2*x]),
      direction: 'R',
      isGameOver: false,
      isNear: false,
      score: 0
    })
  }

  render() {
    return (
      <div>
        <audio id="pointSound" src={point} preload="auto"></audio>
        <audio id="gameOverSound" src={gameOver} preload="auto"></audio>
        <h1>SNAKE MANIA</h1>
        <div className="game-layout">
          <Snake snakeSquares={this.state.snake} />
          <Bait dot={this.state.bait} isNear={this.state.isNear}/> 
        </div>
        <div className="information">
          <Score currentScore={this.state.score} highScore={this.state.highScore} />
          <DifficultyLevel handler={this.setSpeed}/>
          <div style={{marginLeft: '120px'}}>
            <button onClick={() => this.start()}>Start</button>
            <button onClick={() => this.reset()}>Reset</button>
          </div>
          <Instructions />
          <Gameover isGameOver={this.state.isGameOver} reason={this.state.gameOverReason}/>
        </div>
      </div>
    );
  }
}

export default App;
