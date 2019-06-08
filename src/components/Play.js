import React, {useState} from 'react';
import Cards from './Cards';
import AddFlashCards from './AddFlashCards';
import capybara from './images/capybara.jpg';
import {Container, Header, Divider, Button, Modal } from "semantic-ui-react";

const Play = () => {
  const [cards, setCards] = useState([
    { id: 1, animalName: "Capybara", image: capybara, description: "rodent of unusual size", location: "South America", moreInfo: "http://www.softschools.com/facts/animals/capybara_facts/48/", },
    { id: 2, animalName: "Caiman", image: "https://a-z-animals.com/media/animals/images/original/caiman4.jpg", description: "like an alligator", location: "South America", moreInfo: "http://www.softschools.com/facts/animals/caiman_facts/482/", },
    { id: 3, animalName: "Andean Cock of the Rock", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rupicola_peruviana_%28male%29_-San_Diego_Zoo-8a.jpg", description: "National Bird of Peru", location: "South America",moreInfo: "https://nhpbs.org/wild/andeancockoftheRock.asp", },
    { id: 4, animalName: "Bush Dog", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Speothos_venaticus_Zoo_Praha_2011-5_%28cropped%29.jpg/440px-Speothos_venaticus_Zoo_Praha_2011-5_%28cropped%29.jpg", description: "Has partially webbed feet to help swimming and diving" , location: "Central/South America", moreInfo: "http://www.softschools.com/facts/animals/bush_dog_facts/1107/", }
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
    return
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