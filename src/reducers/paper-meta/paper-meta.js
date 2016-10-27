export default (state = false, action) => {
    console.log(action.result);
    switch (action.type) {
        case 'PAPER_META': {
            if (action.result) {
                alert("修改成功");
            }else {
                alert("修改失败");
            }
        }
    }
    return state;
};