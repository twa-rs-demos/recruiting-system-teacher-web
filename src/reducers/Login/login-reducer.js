function loginState(state = false, action) {
    switch (action.type) {
        case 'LOGIN': {
            return !state
        }
        case 'LOGIN_ERROR': {
            alert('请输入正确的用户名和密码！');
            return state
        }
    }
    return state;
}
export default loginState;