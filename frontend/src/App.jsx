import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import RegisterPage from './pages/RegisterPage'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboardpage" element={<DashboardPage />} />
      
        </Routes>
      </Router>

    </>
  )
}

export default App
