import React, { useState, useEffect } from "react";
import { useLocation } from "wouter"
import useUser from 'hooks/useUser'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation()
  const { isLogged, login, loading, error } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
  };

  if (loading) return 'Checking credentials'

  return (
    <>
      <h2>Login</h2>
      {loading && <strong>Checking credentials...</strong>}
      {!loading && <form onSubmit={handleSubmit}>
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>}
      {error && <strong>Credentials are invalid</strong>}
    </>

  );
}
