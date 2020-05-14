import React, {Component} from 'react';
import { connect } from 'react-redux';


class AddPetForm extends Component {
  state= {
    pet: {
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
    console.log('this.state.pet:', this.state.pet);
};

handleSubmit = (event) => {
  event.preventDefault();
  console.log('Dispatching info payload:', this.state.pet);

  // Send inputs to petInfo.saga
  this.props.dispatch({ type: 'ADD_PET', payload: this.state.pet });
};

  render() {
    return (
      <div>
        <h2>Add Pet</h2>
        <form>
          <input type="text" placeholder="Pet Name" onChange={(event) => this.handleChangeFor(event, 'name')} />
          <input type="text" placeholder="Pet Color" onChange={(event) => this.handleChangeFor(event, 'color')} />
          <input type="text" placeholder="Pet Breed" onChange={(event) => this.handleChangeFor(event, 'breed')} />
          <select id="owners-name" name="owner-name">
                <option value="owners-name">Owners Name</option>
          </select>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default connect() (AddPetForm);