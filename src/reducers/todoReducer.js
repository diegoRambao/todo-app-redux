const INI_STATE = []

const todoTypes = {
   addTodo: '@todo/add',
   toogleTodo: '@todo/toggled',
   removeTodo: '@todo/removeOne',
}

const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

export const todoReducer = (state = INI_STATE, action) => {
   switch (action.type) {
      case todoTypes.addTodo:
         const newTodo = action.payload
         return [...state, newTodo]
      case todoTypes.toogleTodo:
         const newState = state.map((todo) => (todo.id === action.payload ? { ...todo, status: !todo.status } : todo))
         return newState
      case todoTypes.removeTodo:
         return state.filter((todo) => todo.id !== action.payload)
      default:
         return state
   }
}

export const actionAddTodo = (content) => {
   return {
      type: todoTypes.addTodo,
      payload: {
         content,
         status: false,
         id: generateId(),
      },
   }
}

export const toogleTodo = (id) => {
   return {
      type: todoTypes.toogleTodo,
      payload: id,
   }
}

export const removeOneTodo = (id) => {
   return {
      type: todoTypes.removeTodo,
      payload: id,
   }
}
