import React, { useState,} from 'react'
import AddFlashCard from './AddFlashCards';
import Counter from './Counter';
import {Button, Image, Card, Modal, Header, } from 'semantic-ui-react';

const Flashcard =  (props) => {
  const [showFront, setShowFront] = useState(true);  

 
  const flipCard = () => {
    setShowFront( !showFront )
    }
  

  const {image, description, animalName, location, id, remove, edit, moreInfo} = props
  return(
    <Card >
      <Modal trigger={<Image src={image} wrapped ui={false}/>}>
          <Image size='huge' src={image}></Image>
      </Modal>
      <p style={{fontSize: '10px'}}>Click photo to enlarge</p>
        <Card.Content>
          <br />
          {showFront &&
          <div> 
            <br />
          <Card.Content>Lives in: {location}</Card.Content>
            <br />
            <Card.Description>Factoid:   {description}</Card.Description>
            <br />
            <br />
          </div>}
        
        {/* CARD BACK */}
        {!showFront && 
        <>
          <Card.Header>{animalName}</Card.Header>
          <br />
          <a href={moreInfo} target={'new'}>Click here to learn more</a>
        </>}
        <div style={showFront ? {display: 'none'}: null }>
          <Card.Content>
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
                size='tiny'>
                Edit
              </Button>} closeIcon>
                <Header>Edit This FlashCard</Header>
                  <Modal.Content>
                    <AddFlashCard {...props} edit={edit}
                    />
                  </Modal.Content>
                </Modal>
              </div>
            </Card.Content>
            <br />
            <br />
            <Counter /> 
          </div>
          <Button onClick={flipCard} basic color="blue">Flip</Button>
      </Card.Content>
      </Card>
    )
  }
  
  
  export default Flashcard