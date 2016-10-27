export default (state = false, action) => {
    switch (action.type) {
        case 'PAPER_META': {
            if (action.result.url) {
                alert("修改成功");
            }
        }
    }
    alert("修改失败");
};