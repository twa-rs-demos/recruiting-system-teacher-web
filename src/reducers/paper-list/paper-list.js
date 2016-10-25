export default (state = [], action) => {
  switch (action.type) {
    case 'PAPER_LISTED':
      return action.paperList;
    default:
      return state;
  }
};