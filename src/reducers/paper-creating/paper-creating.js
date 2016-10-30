// export default (state = false, action) => {
//   switch (action.type) {
//     case 'CREATED_PAPER':
//       return !status;
//     default:
//       return state;
//   }
// };

function paperCreate(state = false, action) {
  switch (action.type) {
    case 'CREATED_PAPER':
      return !state;
    default:
      return state;
  }
}

export default paperCreate;