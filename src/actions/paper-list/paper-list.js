import superagent from 'superagent';

export const getPaperList = ()=> {
  return (dispatch)=> {
    superagent
      .get('/api/papers')
      .end((err, res) => {
        if (err) {
          throw(err);
        } else {
          dispatch(getPaperInfo(res.body));
        }
      });
  }
};

export const getPaperInfo = (paperList)=> {
  return ({
    type: 'PAPER_LISTED',
    paperList
  });
};