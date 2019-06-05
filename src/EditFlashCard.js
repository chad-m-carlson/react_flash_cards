import React from 'react';
import {Form, } from 'semantic-ui-react'

class EditFlashCard extends React.Component{
  state = {
    id: this.props.id,
    animalName: '', 
    image: '',
    description: '',
    location: '',
  };
  
  handleChange = (e, {name, value}) => {
    this.setState({[name]: value})
  };
  
  handleSubmit = (e) => {
    const {edit} = this.props
    e.preventDefault();
    edit(this.state)
    this.setState({
      id: '',
      animalName: '',
      image: '',
      description: '',
      location: '',
    })
  };
  
  render(){
    const {animalname, description, location, image, } = this.props
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Animal Name"
            placeholder={animalname}
            name="animalName"
            value={this.state.animalName}
            onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Location"
              placeholder={location}
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              />
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Input
            fluid
            label="Description"
            placeholder={description}
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            />
          <Form.Input
            fluid
            label="Image URL"
            placeholder={image}
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Button>Edit Flash Card</Form.Button>
      </Form>
    )
  }
}

export default EditFlashCard