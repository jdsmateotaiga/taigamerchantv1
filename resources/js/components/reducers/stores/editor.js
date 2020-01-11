const initState = {
  editor: 'Product Description'
}

const editorReducer = ( state = initState, action ) => {
  console.log(action);
  switch(action.type) {
    case 'EDITOR':
      return {
        ...state,
        editor: action
      }
    break;
    default:
      return state;
  }
}

export default editorReducer;
