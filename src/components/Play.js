import React, {useState} from 'react';
import Cards from './Cards';
import AddFlashCards from './AddFlashCards';
import capybara from './images/capybara.jpg';
import {Container, Header, Divider, Button, Modal } from "semantic-ui-react";

const Play = () => {
  const [cards, setCards] = useState([
    { id: 1, animalName: "Capybara", image: capybara, description: "rodent of unusual size", location: "South America", },
    { id: 2, animalName: "Caiman", image: "https://a-z-animals.com/media/animals/images/original/caiman4.jpg", description: "like an alligator", location: "South America", },
    { id: 3, animalName: "Andean Cock of the Rock", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rupicola_peruviana_%28male%29_-San_Diego_Zoo-8a.jpg", description: "National Bird of Peru", location: "South America",},
  ]);
  
  const getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  const addFlashCard = (flashCardInfo) => {
    console.log(flashCardInfo)
    let flashCard = { id: getId(), ...flashCardInfo };
    debugger
    setCards([...cards, flashCard], );
  };

  const editFlashCard = (flashCardInfo) => {
    let newFlashCardArray = cards.map( flashcard => {
      if (flashcard.id === flashCardInfo.id)
        return flashCardInfo
      return flashcard
    })
    setCards( newFlashCardArray)
  }

  const removeFlashCard = (id) => {
    const newCardsArray = cards.filter( card => {
      if (card.id !== id )
      return card
    }
    );
    setCards([...newCardsArray], );
  };

    return (
      <Container style={{padding: "25px"}}>
        <Header as='h1'>Animal Flash Cards</Header>
        <Divider/>
        <Cards cards={cards} remove={removeFlashCard} edit={editFlashCard}/>
        <br />
        <Divider />
        <Modal trigger={
          <Button 
          color='blue'
          size='tiny'
          >
          Add a FlashCard
        </Button>} closeIcon>
          <Header>Add A FlashCard</Header>
          <Modal.Content>
            <AddFlashCards
            add={addFlashCard}/>
          </Modal.Content>
        </Modal>
      </Container>
    )
  };


export default Play;