import React from 'react'
import {Button, Image, Card, Modal, Header, } from 'semantic-ui-react';

class Flashcard extends React.Component{
  state = {
    showFront: true,
    right: 0,
    wrong: 0,
  }

  flipCard = () => {this.setState({ showFront: !this.state.showFront})};

  increaseRight = () => {this.setState({ right: this.state.right + 1})};
  increaseWrong = () => {this.setState({ wrong: this.state.wrong + 1})};

  // changeCounters = (which) => {
  //   if (which === 'right') {
  //     this.setState({ right: this.state.right +1})
  //   } else this.setState({ wrong: this.state.wrong +1});
  // }
  
    
    render(){
      const {image, description, animalName, location, id, remove, edit} = this.props
      return(
          <Card >
            <Image src={image} wrapped ui={false} />
            <Card.Content>
              <br />
              {this.state.showFront ? <div> <Card.Header>Lives in.....</Card.Header><br />
            <Card.Content>{location}</Card.Content><br />
            <Card.Description>Factoid: {description}</Card.Description></div> : null}
           
            {/* CARD BACK */}
            {!this.state.showFront ? <Card.Header>{animalName}</Card.Header> : null}
            {!this.state.showFront ? 
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button 
                    basic color='red'
                    size='tiny'   
                    onClick={() =>remove(id)}>
                    Delete
                  </Button>
                  <Modal trigger={
                    <Button 
                    basic color='yellow'
                    size='tiny'
                    >
                    Edit
                  </Button>} closeIcon>
                    <Header>Edit This FlashCard</Header>
                    <Modal.Content>
                      {/* <EditFlashCard 
                      image={this.props.image}
                      description={this.props.description}
                      animalname={this.props.animalName}
                      location={this.props.location}
                      edit={edit}
                      id={id}/> */}
                    </Modal.Content>
                  </Modal>
                </div>
              </Card.Content> : null}
            
            <br />
            <br />
            {!this.state.showFront ? <div>
                <Button
                  onClick={this.increaseRight}
                  // onClick={this.changeCounters('right')}
                  color='green'
                  size='tiny'
                  content='Right!'
                  icon='thumbs up'
                  label={{ as: 'a', basic: true, color: 'green', pointing: 'left', content: this.state.right }}
                />
                <Button
                  onClick={this.increaseWrong}
                  color='red'
                  size='tiny'
                  content='Wrong!'
                  icon='thumbs down'
                  label={{ as: 'a', basic: true, color: 'red', pointing: 'left', content: this.state.wrong }}
                />
              </div> : null}
              <Button onClick={this.flipCard} basic color="blue">Flip</Button>
          </Card.Content>
          </Card>
        )
    }
    }
export default Flashcard