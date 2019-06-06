import React from 'react';
import {Form, } from 'semantic-ui-react'

class AddFlashCards extends React.Component{
  state = {
    animalName: '', 
    image: '',
    description: '',
    location: '',
  };

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id){
      // IF THERE IS A PROP ID BECAUSE YOU ARE EDITING, IT CALLS THE EDIT FUNCTION IN PLAY, USES THE CURRENT ID AND THEN THE VALUES THAT WERE SET IN STATE HERE.
      this.props.edit({id: this.props.id, ...this.state})
    }else this.props.add(this.state);
    this.setState({
      animalName: '',
      image: '',
      description: '',
      location: '',
    });
  };

  componentDidMount() {
    // IF THIS FORM MOUNTS AFTER INITIAL RENDERING AND HAS AN ID IN THE PROPS,  IT IS GOING TO SET STATE WITH THE CURRENT PROPS
    const {animalName, image, description, location} = this.props
    if (this.props.id){
      this.setState({animalName,image,description, location,})
    }
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Animal Name"
            placeholder="Animal Name"
            name="animalName"
            value={this.state.animalName}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Location"
            placeholder="Location"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Input
            fluid
            label="Description"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            />
          <Form.Input
            fluid
            label="Image URL"
            placeholder="Image URL"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Button>
          {this.props.id ?" Edit Animal" : "Add Animal"}
        </Form.Button>
      </Form>
    )
  }
}

export default AddFlashCards