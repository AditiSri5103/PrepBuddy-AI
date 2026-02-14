import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import DashBoard from './pages/Home/DashBoard'
import InterviewPrep from './pages/InterviewPrep/InterviewPrep'
import { Toaster } from 'react-hot-toast'
import UserProvider from './context/userContext'


const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
        </Routes>
      </Router>
      <Toaster toastOptions={{
        className: "",
        style: {
          fontSize: "13px",
        },
      }} >

      </Toaster>

    </div>
    </UserProvider>
  )
}

export default App
