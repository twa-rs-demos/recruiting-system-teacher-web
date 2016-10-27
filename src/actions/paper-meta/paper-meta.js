import superagent from 'superagent';

export const modifyMetaInfo = (title, description, easyCount, normalCount, hardCount)=> {
    return (dispatch)=> {
        superagent
            .put('/api/papers')
            .send({title, description, easyCount, normalCount, hardCount})
            .end((err, res) => {
                if (err) {
                    throw(err);
                } else {
                    dispatch(getMeta(res.body));
                }
            });
    }
};

const getMeta = (result)=> {

    return {
        type: "PAPERS_META",
        result
    };
};