import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/dashboardpage" element={<DashboardPage />} />
      
        </Routes>
      </Router>

    </>
  )
}

export default App
