import { Container } from './style'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { actionAddTodo } from '../../reducers/todoReducer'

export function Header() {
   const contentInput = useRef()
   const dispatch = useDispatch()

   const handleClick = (event) => {
      if (event.key === 'Enter') {
         dispatch(actionAddTodo(contentInput.current.value))
         contentInput.current.value = ''
      }
   }

   return (
      <Container>
         <h1>TODOS</h1>
         <input placeholder="What needs to be done?" ref={contentInput} onKeyPress={handleClick} />
      </Container>
   )
}
