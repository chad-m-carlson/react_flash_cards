import React from 'react';
import Cards from './Cards';
import AddFlashCards from './AddFlashCards';
import {Container, Header, Divider } from "semantic-ui-react";
import capybara from "./images/capybara.jpg";

class App extends React.Component {
  state = {
    cards: [
      { id: 1, animalName: "Capybara", image: capybara, description: "rodent of unusual size", location: "South America", },
      { id: 2, animalName: "Caiman", image: "https://a-z-animals.com/media/animals/images/original/caiman4.jpg", description: "like an alligator", location: "South America", },
      { id: 3, animalName: "Andean Cock of the Rock", image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rupicola_peruviana_%28male%29_-San_Diego_Zoo-8a.jpg", description: "National Bird of Peru", location: "South America",},
    ],

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

  // flipCard = (id) => {
  //   const cards = this.state.cards.map( card => {
  //     if (card.id === id){
  //       card.showFront = false
  //       this.setState({cards: [card],})
  //     }
  //   });
  // };

  render() {
    return (
      <Container style={{paddingTop: "25px"}}>
        <Header as='h1'>Animal Flash Cards</Header>
        <Divider/>
        <Cards cardList={this.state.cards} remove={this.removeFlashCard}/>
        <br />
        <Divider />
        <AddFlashCards add={this.addFlashCard}/>
      </Container>
    )
  };
};


export default App;
