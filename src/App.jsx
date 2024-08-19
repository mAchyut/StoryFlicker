import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header} from './components'
import { Outlet } from 'react-router-dom'
import Loader from "./Images/Loader.gif"


function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()
  

useEffect(() => {
  authService.getCurrentUser()
      .then((userData) => {
          if (userData) {
              dispatch(login({ userData }));
          } else {
              dispatch(logout());
          }
      })
      .finally(() => setLoading(false));
}, []);


  return !loading ? (
    
<div className='min-h-screen flex flex-col bg-gray-100 w-full overflow-x-hidden'>
      <Header />
      <main className='flex-grow w-full px-4 py-6 bg-gray-200 shadow-md border border-gray-400'>
        <Outlet />
      </main>
      <Footer />
    </div>
    
  ) : <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <img src={Loader} className="w-full max-w-xs bg-gray-100"/>
</div>

}

export default App
