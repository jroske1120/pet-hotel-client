import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddPetForm extends Component {
  state = {
    pet: {
      owner_id: '',
      name: '',
      color: '',
      breed: '',
    }
  };

  handleChangeFor = (event, propertyName) => {
    this.setState({
      pet: {
        ...this.state.pet,
        [propertyName]: event.target.value,
      }
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dispatching info payload:', this.state.pet);

    // Send inputs to petInfo.saga
    this.props.dispatch({ type: 'ADD_PET', payload: this.state.pet });
    this.setState({
      pet: {
        owner_id: '',
        name: '',
        color: '',
        breed: ''
      }
    })
  };

  render() {

    return (
      <div className="offEdge">
        <form>
          <h2>Add Pet</h2>
          <input 
            type="text" 
            placeholder="Pet Name"
            value={this.state.pet.name} 
            onChange={(event) => this.handleChangeFor(event, 'name')} />
          <input 
            type="text" 
            placeholder="Pet Color" 
            value={this.state.pet.color} 
            onChange={(event) => this.handleChangeFor(event, 'color')} />
          <input 
            type="text" 
            placeholder="Pet Breed" 
            value={this.state.pet.breed} 
            onChange={(event) => this.handleChangeFor(event, 'breed')} />

          <select 
            id="owners-name" 
            name="owner-name"
            value={this.state.pet.owner_id}  
            onChange={(event) => this.handleChangeFor(event, 'owner_id')}>

          <option value="">Owner Name</option>
            {this.props.owners.map((item) => {
              return (
                <option key={item.id} value={item.id} >{item.name}</option>
              )
            })
            };
          </select>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
};

const mapStoreToProps = (store) => ({
  owners: store.setOwner
});

export default connect(mapStoreToProps)(AddPetForm);