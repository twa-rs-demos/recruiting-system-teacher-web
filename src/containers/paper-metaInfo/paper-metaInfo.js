import React from 'react';
import {connect} from 'react-redux';

import {modifyMetaInfo} from '../../actions/paper-metalnfo/paper-metalnfo';
import PaperMetaInformation from '../../components/paper-metaInfo/Paper-metaInfo';

const mapStateToProps = (state)=> state;


const mapDispatchToProps = (dispatch)=> {

    return {
        onModifyInfo: (title, description, easyCount, normalCount, hardCount)=> {

            dispatch(modifyMetaInfo(title, description, easyCount, normalCount, hardCount));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperMetaInformation);