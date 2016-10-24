function loginReducer(state = {status: false}, action) {
    switch (action.type) {
        case 'LOGIN': {
            return ({
                status: !state.status
            })
        }
        case 'ERR': {
            alert('请输入正确的用户名和密码！');
            return ({
                status: state.status
            })
        }
    }
    return state;
}
export default loginReducer;