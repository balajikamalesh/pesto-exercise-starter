import React from 'react';

export default (props) => {
  return (
    <div>
      <h1>High Score: {props.highScore} </h1>
      <h1>Score: {props.currentScore} </h1>
    </div>
  )
}