import React, {useState, useEffect} from 'react';
import {Form, } from 'semantic-ui-react'

const AddFlashCards = (props) => {
  const [animalName, setAnimalName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.id){
      // IF THERE IS A PROP ID BECAUSE YOU ARE EDITING, IT CALLS THE EDIT FUNCTION IN PLAY, USES THE CURRENT ID AND THEN THE VALUES THAT WERE SET IN STATE HERE.
      props.edit({id: props.id, animalName, image, description, location})
    }else 
    props.add({ animalName, image, description, location});
    setAnimalName('');
    setImage('');
    setDescription('');
    setLocation('');
  };

  // IF THIS FORM MOUNTS AFTER INITIAL RENDERING AND HAS AN ID IN THE PROPS,  IT IS GOING TO SET STATE WITH THE CURRENT PROPS
  // const componentDidMount = ()=> {
  //   const {animalName, image, description, location} = this.props
  //   if (this.props.id){
  //     this.setState({animalName,image,description, location,})
  //   }
  // }
  useEffect( () => {
    if (props.id){
      setAnimalName(props.animalName);
      setImage(props.image);
      setDescription(props.description);
      setLocation(props.location);
    }
  },[]);


  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Animal Name"
          placeholder="Animal Name"
          name="animalName"
          value={animalName}
          onChange={e => setAnimalName(e.target.value)}
        />
        <Form.Input
          fluid
          label="Location"
          placeholder="Location"
          name="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </Form.Group>
      <Form.Group widths="equal">  
        <Form.Input
          fluid
          label="Description"
          placeholder="Description"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
        <Form.Input
          fluid
          label="Image URL"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={e => setImage(e.target.value)}
          />
      </Form.Group>
      <Form.Button>
        {props.id ?" Edit Animal" : "Add Animal"}
      </Form.Button>
    </Form>
  );
};

export default AddFlashCards