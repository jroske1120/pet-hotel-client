import React, {Component} from 'react';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import OwnerForm from '../../OwnerForm/OwnerForm';
import OwnerDisplay from '../../OwnerDisplay/OwnerDisplay';

class ManagerOwnerPage extends Component {

  componentDidMount(){
    this.props.dispatch( { type: 'GET_OWNER' } );
  }; //end DidMount

  render() {
    return (
      <div>
        <h1>Manager Owner Page</h1>
        <OwnerForm />
        <OwnerDisplay />
      </div>
    )
  }
}

export default connect(mapStoreToProps)(ManagerOwnerPage);