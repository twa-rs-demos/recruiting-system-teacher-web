import React from 'react';
import {connect} from 'react-redux';

<<<<<<< HEAD:src/containers/paper-metaInfo/paper-metaInfo.js
import {modifyMetaInfo} from '../../actions/paper-metalnfo/paper-metalnfo';
import PaperMetaInformation from '../../components/paper-metaInfo/Paper-metaInfo';

const mapStateToProps = (state)=> state;

=======
import PaperMeta from '../../components/paper-meta/Paper-meta';
import {modifyMetaInfo} from '../../actions/paper-meta/paper-meta';
>>>>>>> c11e2c9:src/containers/paper-meta/paper-meta.js

const mapDispatchToProps = (dispatch)=> {

    return {
        onModifyInfo: (title, description, easyCount, normalCount, hardCount)=> {

            dispatch(modifyMetaInfo(title, description, easyCount, normalCount, hardCount));
        }

    }
};

<<<<<<< HEAD:src/containers/paper-metaInfo/paper-metaInfo.js
export default connect(mapStateToProps, mapDispatchToProps)(PaperMetaInformation);
=======
export default connect(()=> {
    return {}
}, mapDispatchToProps)(PaperMeta);
>>>>>>> c11e2c9:src/containers/paper-meta/paper-meta.js
