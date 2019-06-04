import React from 'react';
import Flashcard from './Flashcard';
import { Button, Card, Image } from 'semantic-ui-react';

const Cards = ({cardList,remove,}) => (
      <Card.Group>
        {cardList.map( card => (
        <Flashcard key={card.id} {...card} remove={remove}/>
        ))}
      </Card.Group>
    )


export default Cards