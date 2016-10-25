function loginState(state = false, action) {
    switch (action.type) {
        case 'LOGIN': {
            return ({
                status: !state
            })
        }
        case 'ERR': {
            alert('请输入正确的用户名和密码！');
            return ({
                status: state
            })
        }
    }
    return state;
}
export default loginState;