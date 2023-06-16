'use client'
import { login } from '@/lib/admin/login'
import React from 'react'
import { useRouter } from 'next/navigation';

type Props = {}

const Admin = (props: Props) => {
  return (
    <LoginForm/>
  )
}
// components/LoginForm.js

import { useState } from 'react';

function LoginForm() {
  const { push } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = await login(email, password)
    console.log(data)
    if(data.token){
      localStorage.setItem("auth-token", data.token);
      setEmail('');
      setPassword('');
      setErr('');
      push('/admin/dashboard')
    }
    if(data.response){
      setErr(data.response.data.message)
    }

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
        <p className='text-sm text-red-400 my-3'>{err}</p>
      </div>
    </form>
  );
}

export default Admin