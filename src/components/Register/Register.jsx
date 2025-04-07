import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      const res = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        // Store the JWT token
        localStorage.setItem("token", data.jwt)
        // Store user data
        localStorage.setItem("user", JSON.stringify(data.user))
        // Clear form data
        setUsername("")
        setEmail("")
        setPassword("")
        // Redirect to home page
        navigate("/")
      } else {
        setError(data.error.message)
      }
    } catch (err) {
      setError("Something went wrong!")
    }
  }

  return (
    <div className="register">
      <div className="register-container">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register 