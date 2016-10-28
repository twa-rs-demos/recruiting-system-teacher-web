import React from 'react';
import {connect} from 'react-redux';
import PaperCreating from '../../components/paper-creating/Paper-creating';
import {paperCreating} from '../../actions/paper-creating/paper-creating';

const mapStateToProps = (state)=> {

  return {status: state.status};
};

const mapDispatchToProps = (dispatch)=> {

  return {
    onCreate: (simple, general, complex)=> {
      dispatch(paperCreating(simple, general, complex));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperCreating);