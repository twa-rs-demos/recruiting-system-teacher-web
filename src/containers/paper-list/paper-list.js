import React from 'react';
import {connect} from 'react-redux';

import PaperList from '../../components/paper-list/Paper-list.js';
import {getPaperList} from '../../actions/paper-list/paper-list';

const mapStateToProps = (state)=> {

  return {paperList: state.paperList};
};

const mapDispatchToProps = (dispatch)=> {

  return {
    getPaperList: ()=> {
      dispatch(getPaperList());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperList);