import {checkLogin} from '../../actions/Login/check-login';
import TeacherLogin from '../../components/Login/TeacherLogin'
import {connect} from 'react-redux';

const mapStateToProps = (state)=> state;

const mapDispatchToProps = (dispatch) => {
    return {
        onJudge: (email, password)=> {
            dispatch(checkLogin(email, password));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherLogin);
