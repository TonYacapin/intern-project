import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/auth/register', formData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
