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
    this.props.add(this.state)
    this.setState({
      animalName: '',
      image: '',
      description: '',
      location: '',
    })
  };


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
        <Form.Button>Add Animal</Form.Button>
      </Form>
    )
  }
}

export default AddFlashCards