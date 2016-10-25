/**
 * Created by ritter on 16-10-22.
 */

import superagent from 'superagent';

export const getPaperList = ()=> {
    return (dispatch)=> {
        superagent
            .get("/api/papers")
            .end((err, res) => {
                if (err) {
                    throw(err);
                } else {
                    console.log('----');
                    console.log(res.body);
                    dispatch(getPaperInfo(res.body));
                }
            });
    }
};

export const getPaperInfo = (paperList)=> {
    return ({
        type:'PAPERLIST',
        paperList
    });
};