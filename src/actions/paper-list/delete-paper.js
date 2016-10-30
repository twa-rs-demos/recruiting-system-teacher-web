import superagent from 'superagent';

export const deletePaper = ()=> {
    return (dispatch)=> {
        superagent
            .delete('/api/papers/1')
            .end((err, res) => {
                if (err) {
                    throw(err);
                } else {
                    dispatch(confirm());
                }
            });
    }
};

const confirm = ()=> {
    return ({
        type: 'DELETE_PAPER'
    });
};