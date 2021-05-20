import { Container } from './style'
import { Item } from '../Item'
import { useSelector } from 'react-redux'

export function ListOfTodos() {
   const todos = useSelector((state) => state)
   return (
      <Container>
         <ul>
            {todos.map((todo) => (
               <Item todo={todo} key={todo.id} />
            ))}
         </ul>
      </Container>
   )
}
