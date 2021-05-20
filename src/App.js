import { SectionApp } from './style'
import { Header } from './components/Header'
import { ListOfTodos } from './components/ListOfTodos'
import { Footer } from './components/Footer'

export function App() {
   return (
      <SectionApp>
         <Header />
         <ListOfTodos />
         <Footer />
      </SectionApp>
   )
}
