'use client'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated])

  return children
}

export default ProtectedRoute
