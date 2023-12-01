import './App.css'
import { useState, useEffect } from 'react'
import App from './App'
import Login from './pages/login'
import Signup from './pages/signup'
import { Routes, NavLink, Route } from 'react-router-dom'

function Homepage() {
  const [session, setSession] = useState(null)
  const [token,setToken] = useState(() => {
    if (sessionStorage.getItem('token')) {
      
      let data = JSON.parse(sessionStorage.getItem('token'))
      return true
    } else {
      return false
    }
  })

  if (token) {
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Login setToken={setToken} />} />
        <Route path={'/signup'} element={<Signup />} />
        {token ? <Route path={'/App'} element={<App/>}  />: ''}
        

      </Routes>
    </div>
  )
}

export default Homepage