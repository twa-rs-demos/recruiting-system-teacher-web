export default (state = [], action) => {
  switch (action.type) {
    case 'CREATED_PAPER':
      return action.status;
    default:
      return state;
  }
};