const initialState = {
  title: '',
  content: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'RESET_POST_FORM':
        return initialState;
      default:
          return state;
    }
}
