import React from 'react'
import {Button, Image, Card} from 'semantic-ui-react';

class Flashcard extends React.Component{
  state = {
    showFront: true,
  }

  flipCard = () => {this.setState({ showFront: !this.state.showFront})};
    
    render(){
      const {image, description, animalName, location, id, showFront,  remove} = this.props
      // const { showFront } = this.state
      return(
        <Card  onClick={this.flipCard}>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
              {this.state.showFront ? <div> <Card.Header>Lives in.....</Card.Header>
            <Card.Content>{location}</Card.Content>
            <Card.Description>Factoid: {description}</Card.Description></div> : null}
           
        {/* CARD BACK */}
        {!this.state.showFront ? <Card.Header>{animalName}</Card.Header> : null}
        {!this.state.showFront ? <Button onClick={() =>remove(id)} basic color="red">Delete?</Button> : null}
        </Card.Content>
        </Card>
        )
    }
    }
export default Flashcard