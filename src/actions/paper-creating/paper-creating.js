'use strict';
import superagent from 'superagent';

export const paperCreating = (simple, general, complex) => {
  return (dispatch)=> {
    superagent
      .post('/api/paper/createPaper')
      .send({
        simple, general, complex
      })
      .end((err, res)=> {
        if (err) {
          throw(err);
        } else {
          dispatch(createdPaper(res.status));
        }
      })
  }
};

const createdPaper = (status)=> {
  return ({
    type: "CREATED_PAPER",
    status
  })
};  