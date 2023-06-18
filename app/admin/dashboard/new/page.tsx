'use client'
import { useEffect, useState } from 'react';
import Form from './components/Form';
import PrivateComponent from '../components/Private';

const CreatePostPage = () => {
  const [token, setToken] = useState<String | null>(null)

  useEffect(() => {
      localStorage.getItem('auth-token');
      const data = localStorage.getItem('auth-token')
      setToken(data)
  }, [token])
  return (
    <PrivateComponent>
      <Form token={token} />
    </PrivateComponent>
  )
}


export default CreatePostPage;
