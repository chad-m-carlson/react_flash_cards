import React from 'react';
import Cards from './Cards';
import AddFlashCards from './AddFlashCards';
// import capybara from './images/capybara';
import {Container, Header, Divider, Button, Icon } from "semantic-ui-react";

class Play extends React.Component {
  state = {
    cards: [
      // { id: 1, animalName: "Capybara", image: capybara, description: "rodent of unusual size", location: "South America", },
      { id: 2, animalName: "Caiman", image: "https://a-z-animals.com/media/animals/images/original/caiman4.jpg", description: "like an alligator", location: "South America", },
      { id: 3, animalName: "Andean Cock of the Rock", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rupicola_peruviana_%28male%29_-San_Diego_Zoo-8a.jpg", description: "National Bird of Peru", location: "South America",},
    ],
    showForm: true,
  };
  
  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addFlashCard = (flashCardInfo) => {
    let flashCard = { id: this.getId(), ...flashCardInfo };
    this.setState({ cards: [flashCard, ...this.state.cards], });
  };

  removeFlashCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id )
        return card
    });
    this.setState({cards: [...cards], });
  };

  editFlashCard = (flashCardInfo) => {
    debugger
  }

  toggleForm = () => this.setState({showForm: !this.state.showForm,})

  render() {
    return (
      <Container style={{paddingTop: "25px"}}>
        <Header as='h1'>Animal Flash Cards</Header>
        <Divider/>
        <Cards cardList={this.state.cards} remove={this.removeFlashCard} edit={this.editFlashCard}/>
        <br />
        <Divider />
        <Button icon color="blue" onClick={this.toggleForm}>
          <Icon name={ this.state.showForm ? 'caret square up outline' : 'caret square down outline'}/>
        </Button>

       {this.state.showForm ? <AddFlashCards add={this.addFlashCard}/> : null}
      </Container>
    )
  };
};


export default Play;