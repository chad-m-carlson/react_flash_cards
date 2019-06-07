import React, { useState, } from 'react';
import {Button, } from 'semantic-ui-react';



const Counter = (props) => {
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  
  const increaseRight = () => setRight( right + 1 );

  const increaseWrong = () => setWrong( wrong + 1 );

  return(
    <>
  <Button
    onClick={increaseRight}
    color='green'
    size='tiny'
    content='Right!'
    icon='thumbs up'
    label={{ as: 'a', basic: true, color: 'green', pointing: 'left', content: right }}
    />
  <Button
    onClick={increaseWrong}
    color='red'
    size='tiny'
    content='Wrong!'
    icon='thumbs down'
    label={{ as: 'a', basic: true, color: 'red', pointing: 'left', content: wrong }}
    />
  </>
  )
}

export default Counter