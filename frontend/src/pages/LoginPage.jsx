import React from 'react'
import { useNavigate } from 'react-router-dom'
function LoginPage() {


  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/dashboardpage');
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
