import './App.css'
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import History from "./pages/History"
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';





function App() {

  return (
    <>
{/* react toastify */}
<ToastContainer position="top-right" autoClose={3000} theme="colored"/>

    
        < Header />

    
{/* routesinte ullil kodukine path set chynde components mathram */}
    <Routes >
 {/* path=/ is used to indicate the base url or base page */}

      <Route element={ <Landing />} path='/'/>
      <Route element={ <Home />} path='/home'/>
      <Route element={ <History />} path='/history'/>

    </Routes>

       < Footer />
  
    </>
  )
}

export default App
