<<<<<<< HEAD
function paperMeta(state =false, action) {
=======
export default(state =false, action)=> {
>>>>>>> c11e2c9
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

<<<<<<< HEAD
export default paperMeta;
=======
>>>>>>> c11e2c9
