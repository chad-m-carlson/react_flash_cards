import React from 'react';
import Cards from './Cards';
import AddFlashCards from './AddFlashCards';
import capybara from './images/capybara.jpg';
import {Container, Header, Divider, Button, Modal } from "semantic-ui-react";

class Play extends React.Component {
  state = {
    cards: [
      { id: 1, animalName: "Capybara", image: capybara, description: "rodent of unusual size", location: "South America", },
      { id: 2, animalName: "Caiman", image: "https://a-z-animals.com/media/animals/images/original/caiman4.jpg", description: "like an alligator", location: "South America", },
      { id: 3, animalName: "Andean Cock of the Rock", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rupicola_peruviana_%28male%29_-San_Diego_Zoo-8a.jpg", description: "National Bird of Peru", location: "South America",},
    ],
    showForm: false,
  };
  
  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addFlashCard = (flashCardInfo) => {
    let flashCard = { id: this.getId(), ...flashCardInfo };
    this.setState({ cards: [flashCard, ...this.state.cards], });
  };

  editFlashCard = (flashCardInfo) => {
    let newFlashCardArray = this.state.cards.map( flashcard => {
      if (flashcard.id === flashCardInfo.id)
        return flashCardInfo
      return flashcard
    })
    this.setState({cards: newFlashCardArray})
  }

  removeFlashCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id )
      return card
    }
    );
    this.setState({cards: [...cards], });
  };

  toggleForm = () => this.setState({showForm: !this.state.showForm,})

  render() {
    return (
      <Container style={{padding: "25px"}}>
        <Header as='h1'>Animal Flash Cards</Header>
        <Divider/>
        <Cards cardList={this.state.cards} remove={this.removeFlashCard} edit={this.editFlashCard}/>
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
            add={this.addFlashCard}/>
          </Modal.Content>
        </Modal>
      </Container>
    )
  };
};


export default Play;