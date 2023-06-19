'use client'
import { useRouter } from 'next/navigation';

const PrivateComponent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const {push} = useRouter();

  if (typeof window !== 'undefined') {
    const isAdmin = localStorage.getItem('auth-token');
      if (!isAdmin) {
        // Redirect to login page if user is not logged in
        push('/admin');
        return null;
      }
  }
      
  // Render the private component
  return <>{children}</>;
};

export default PrivateComponent;
