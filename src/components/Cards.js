import React from 'react';
import Flashcard from './Flashcard';
import { Card, } from 'semantic-ui-react';

const Cards = ({cardList,remove, edit,}) => (
      <Card.Group>
        {cardList.map( card => (
        <Flashcard key={card.id} {...card} remove={remove} edit={edit}/>
        ))}
      </Card.Group>
    )


export default Cards