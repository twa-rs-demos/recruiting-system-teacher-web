import superagent from 'superagent';

export  const  modifyMeta=(title,description,easyCount,normalCount,hardCount)=>{
    return (dispatch)=> {
        superagent
            .put('/api/papers/modifiedPaper/2')
            .send({title:title,description:description,easyCount:easyCount,normalCount:normalCount,hardCount:hardCount })
            .end((err, res) => {
                if (err) {
                    throw(err);
                } else {
                    dispatch(getMeta(res.body));
                }
            });
    }
};

export const handleChange = ()=> {
    return (dispatch)=> {
        dispatch(changeStatus());
    }
};

function changeStatus() {
    return ({
        type:'MODIFY_STATUS'
    })
}

function getMeta(result) {
    return ({
        type: 'PAPER_META',
        result
    });
}