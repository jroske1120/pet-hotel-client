import React, {Component} from 'react';

//Import individual components to be used on this page
import AddPetForm from '../../Forms/AddPetForm';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HOME Page</h1>
        <AddPetForm />
        <h2>History</h2>
      </div>
    )
  }
}

export default HomePage;