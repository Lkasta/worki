'use client'
import { AuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated])

  return children
}

export default ProtectedRoute
