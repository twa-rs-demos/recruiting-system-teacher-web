function paperMeta(state =false, action) {
    console.log(action);
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
}

export default paperMeta;