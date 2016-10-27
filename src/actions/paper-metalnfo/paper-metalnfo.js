export  const  modifyMetaInfo=(title,description,easyCount,normalCount,hardCount)=>{
    return (dispatch)=> {
        superagent
            .get('/api/papers-metaInfo')
            .end((err, res) => {
                if (err) {
                    throw(err);
                } else {
                    dispatch(getMeta(res.body));
                }
            });
    }
};