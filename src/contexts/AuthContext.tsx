'use client'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import { ReactNode, createContext, useEffect, useState } from 'react'

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  signIn: (data: SignInData) => void
  isAuthenticated: boolean
  isError: boolean
  user: User | null
  signOut: () => void // Inclua a propriedade 'user' no tipo
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { parseCookies, destroyCookie } = require('nookies') // Importe destroyCookie

  const router = useRouter()

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      fetchUserInformation(token)
    }
  }, [])

  const signIn = async ({ email, password }: SignInData) => {
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
        fetchUserInformation(token)
        router.push('/home')
      } else if (response.status === 401) {
        const erroData = await response.json()
        console.log(erroData)
        setIsError(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const signOut = () => {
    destroyCookie(null, 'nextauth.token')

    setUser(null)
    setIsAuthenticated(false)
    router.push('/login')
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
        setIsAuthenticated(true)
      } else {
        setIsError(true)
        setUser(null)
        console.log('caiu aqui no else')
      }
    } catch (error) {
      console.error(error)
      setIsError(true)
      console.log('caiu no catch error')
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, isError, user, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
