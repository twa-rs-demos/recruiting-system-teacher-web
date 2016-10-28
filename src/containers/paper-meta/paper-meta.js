import React from 'react';
import {connect} from 'react-redux';

import PaperMeta from '../../components/paper-meta/Paper-meta';
import {modifyMetaInfo} from '../../actions/paper-meta/paper-meta';

const mapDispatchToProps = (dispatch)=> {

    return {
        onModifyInfo: (title, description, easyCount, normalCount, hardCount)=> {

            dispatch(modifyMetaInfo(title, description, easyCount, normalCount, hardCount));
        }

    }
};

export default connect(()=> {
    return {}
}, mapDispatchToProps)(PaperMeta);
