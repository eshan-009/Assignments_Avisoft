import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpPage from './components/SignUpPage'
import LoginForm from './components/LoginForm'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
 <Routes>
  <Route path='/' element={<LoginForm/>}></Route>
<Route path="/signup" element={<SignUpPage/>}></Route>

 </Routes>
   </>
  )
}

export default App
