import { Container } from './style'
import { useDispatch } from 'react-redux'
import { toogleTodo, removeOneTodo } from '../../reducers/todoReducer'

export function Item({ todo }) {
   const dispatch = useDispatch()
   return (
      <Container status={todo.status}>
         <div>
            <input type="checkbox" onClick={() => dispatch(toogleTodo(todo.id))} defaultChecked={todo.status} />
            <span className="checkmark"></span>
            <label>{todo.content}</label>
            <button onClick={() => dispatch(removeOneTodo(todo.id))}> </button>
         </div>
      </Container>
   )
}
