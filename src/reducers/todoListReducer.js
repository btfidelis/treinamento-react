export default (state={
  todos: [
    { id: 1, title: 'asjdhajshd', createdAt: new Date(), done: false }
  ]
}, action) => {
  switch(action.type) {
    case "ADD_TODO": {
      return state
    }

    case "REMOVE_TODO": {
      return { ...state, todos: action.payload }
    }

    default: {
      return state
    }
  }
}