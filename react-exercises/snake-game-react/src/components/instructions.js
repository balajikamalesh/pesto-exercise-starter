import React from 'react';

export default (props) => {
  return (
    <div style={{marginTop: '40px'}}>
      <h1>Instructions</h1>
      <ol>
        <li>Select difficulty level and click on 'Start' to start the game</li>
        <li>Use arrow keys (TOP, BOTTOM, LEFT, RIGHT) to control the snake</li>
        <li>Press 'Reset' to restart the game</li>
      </ol>
    </div>
  )
}