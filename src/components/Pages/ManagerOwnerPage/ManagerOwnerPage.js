import React, {Component} from 'react';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import OwnerForm from '../../OwnerForm/OwnerForm';
import OwnerDisplay from '../../OwnerDisplay/OwnerDisplay';

class ManagerOwnerPage extends Component {

  render() {
    return (
      <div>
        <OwnerForm />
        <OwnerDisplay />
      </div>
    )
  }
}

export default connect(mapStoreToProps)(ManagerOwnerPage);