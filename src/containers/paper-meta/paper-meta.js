import React from 'react';
import {connect} from 'react-redux';

import PaperMeta from '../../components/paper-meta/Paper-meta';
import {modifyMeta,handleChange} from '../../actions/paper-meta/paper-meta';

const mapStateToProps = (state)=> state;

const mapDispatchToProps = (dispatch)=> {

    return {
        onModifyMeta: (title, description, easyCount, normalCount, hardCount)=> {

            dispatch(modifyMeta(title, description, easyCount, normalCount, hardCount));
        },

        onHandleChange:()=>{
            dispatch(handleChange());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperMeta);
