/**
 * Created by ritter on 16-10-22.
 */
import React from "react";
import {connect} from "react-redux";

import PaperList from '../../components/paper-list/PaperList.js';
import {getPaperList} from '../../actions/paper-list/paperList';

const mapStateToProps = (state)=> {
    console.log(state);
    return {paperList:state.paperListReducer};
};

const mapDispatchToProps = (dispatch)=> {
    return {
        getPaperList: ()=> {
            dispatch(getPaperList());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperList);