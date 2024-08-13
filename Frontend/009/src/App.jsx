
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Menu from './Pages/Menu'
import Select from './Pages/Select'
import About from './Pages/About'
import OwnerLogin from './Admin/OwnerLogin'
import Dashboard from './Admin/Dashboard'
import AdMenu from './Admin/AdMenu'
function App() {

  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/select' element={<Select/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin' element={<OwnerLogin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/admenu' element={<AdMenu/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
