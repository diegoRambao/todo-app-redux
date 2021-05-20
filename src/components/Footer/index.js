import { Container } from './style'
import { useSelector } from 'react-redux'

export function Footer() {
   const lengthTodo = useSelector((state) => state.length)
   return (
      <Container length={lengthTodo}>
         <span>
            <strong>{lengthTodo} </strong>
            items left
         </span>
      </Container>
   )
}
