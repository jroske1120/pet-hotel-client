import React, {Component} from 'react';

class AddPetForm extends Component {
  render() {
    return (
      <div>
        <h2>Add Pet</h2>
        <form>
          <input type="text" placeholder="Pet Name"/>
          <input type="text" placeholder="Pet Color"/>
          <input type="text" placeholder="Pet Breed"/>
          <select id="owners-name" name="owner-name">
            <option value="owners-name">Owners Name</option>
          </select>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default AddPetForm;