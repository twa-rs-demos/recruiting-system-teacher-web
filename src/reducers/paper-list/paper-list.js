export default (state = [], action) => {
  switch (action.type) {
    case 'PAPER_LISTED':
      return action.paperList;
    case 'DELETE_PAPER':
      console.log('delete successfully');
    default:
      return state;
  }
};