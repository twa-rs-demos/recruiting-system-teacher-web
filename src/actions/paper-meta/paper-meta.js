import superagent from 'superagent';

export  const  modifyMetaInfo=(title,description,easyCount,normalCount,hardCount)=>{
    return (dispatch)=> {
        superagent
            .put('/api/papers')
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

function getMeta(result) {
    return ({
        type: 'PAPER_META',
        result
    });
}