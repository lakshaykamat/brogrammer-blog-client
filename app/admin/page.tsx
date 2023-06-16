'use client'
import { login } from '@/lib/admin/login'
import React from 'react'

type Props = {}

const Admin = (props: Props) => {
  return (
    <LoginForm/>
  )
}
// components/LoginForm.js

import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const token = login(email, password)
    // Perform login logic here

    setEmail('');
    setPassword('');
  };

  return (
<form  className="max-w-xl mx-auto my-32" onSubmit={handleSubmit}>
  <h1 className='text-3xl font-bold my-6'>Login</h1>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 font-semibold">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Admin