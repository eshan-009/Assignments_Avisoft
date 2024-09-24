
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import TodosPage from './Pages/TodosPage'
import UsersPage from './Pages/UsersPage'
import PostsPage from './Pages/PostsPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {


  return (
 <div>
  <NavBar></NavBar>
  <Footer></Footer>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/todos' element={<TodosPage/>}></Route>
    <Route path='/users' element={<UsersPage/>}></Route>
    <Route path='/posts' element={<PostsPage/>}></Route>
  </Routes>
 </div>
  )
}

export default App
