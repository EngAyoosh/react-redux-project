export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
    // mutate the state is reject
      //  state.push(action.course);
      // return state;
      return [...state,
      Object.assign({}, action.course)];
    default:
      return state;
  }
}
