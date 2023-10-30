'use client'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { parseCookies, setCookie } from 'nookies'
import { ReactNode, createContext, useEffect, useState } from 'react'

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  signIn: (data: SignInData) => void
  isAuthenticated: boolean
  isError: boolean
  user: User | null // Inclua a propriedade 'user' no tipo
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user
  const router = useRouter()

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    console.log(token)

    if (token) {
      fetchUserInformation(token)
    }
  }, [])

  const signIn = async ({ email, password }: SignInData) => {
    console.log('aqui foi')
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        const token = data.token

        setCookie(undefined, 'nextauth.token', token, {
          maxAge: 60 * 60 * 1,
        })
        router.push('/home')
      } else if (response.status === 401) {
        const erroData = await response.json()
        console.error(erroData.erro)
        setIsError(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchUserInformation = async (token: string) => {
    try {
      const response = await fetch('/api/getUser', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
        console.log(userData)
      } else {
        setIsError(true)
        setUser(null)
      }
    } catch (error) {
      console.error(error)
      setIsError(true)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, isError, user }}>
      {children}
    </AuthContext.Provider>
  )
}
