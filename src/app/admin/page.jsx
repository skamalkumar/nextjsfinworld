'use client'
import AdminPanel from '@/components/AdminPanel';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { useEffect } from 'react';

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to login if no user
    }
  }, [user, router]); // Ensure router is included in the dependency array

  // If user is not yet available, return null or a loading state
  if (!user) {
    return null; // Or you can show a loading spinner
  }

  return (
    <div>
      <AdminPanel />
    </div>
  );
}
