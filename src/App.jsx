import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import PageNoteFound from './pages/PageNoteFound'
import Auth from './pages/Auth'

function App() {

  return (
    <>
    <Routes>

      <Route path='/'  element={<Home/>}/>
      <Route  path='/project' element={<Project/>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>

      <Route path='*' element={<PageNoteFound/>}/>
    </Routes>
    </>
  )
}

export default App
