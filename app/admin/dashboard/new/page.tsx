'use client'
import  {useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Form from './components/Form';

const CreatePostPage = () => {
  const { push } = useRouter()

  useEffect(() => {
    const data2 = localStorage.getItem('auth-token')
  console.log(data2)
  if (!data2) {
    return push('/admin')
  }else{
    return <Form token={data2}/>
  }
  });
}


export default CreatePostPage;
