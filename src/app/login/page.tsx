'use client'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, useState } from 'react'
import { Input } from '../components/Input'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showWarning, setShowWarning] = useState(false) // Estado para controlar a visibilidade do aviso

  const { signIn, isError } = useContext(AuthContext) // Acesse a função de autenticação

  const handleSignIn = () => {
    if (!email || !password) {
      setShowWarning(true)
    } else {
      setShowWarning(false)
      signIn({ email, password })
    }
  }

  return (
    <div className="grid grid-cols-2 divide-x">
      <div className="flex items-center justify-center">
        <div className="flex w-1/2 flex-col gap-10">
          <div className="Logo">
            <h1 className="text-7xl font-bold text-zinc-700">
              work<span className="text-violet-700">i</span>
            </h1>
            <p className="font-semibold text-zinc-500">
              Trabalhe onde você quiser...
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="">
              <Input
                name="email"
                type="email"
                label="E-mail"
                placeholder="name@example.com"
                value={email} // Passa o valor do estado email para o campo de entrada
                onChange={(value) => setEmail(value)} // Atualiza o estado email quando o valor muda
              />
            </div>
            <div className="input">
              <Input
                name="password"
                type="password"
                label="Senha"
                placeholder="•••••••••••••"
                value={password} // Passa o valor do estado password para o campo de entrada
                onChange={(value) => setPassword(value)} // Atualiza o estado password quando o valor muda
              />
            </div>

            <button
              className="hover-bg-violet-500 rounded-lg bg-violet-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm"
              onClick={handleSignIn}
            >
              Entrar
            </button>

            {showWarning && (
              <div className="text-red-500">
                Preencha o e-mail e a senha antes de enviar.
              </div>
            )}

            {isError && (
              <div className="text-red-500">
                Credenciais inválidas. Por favor, verifique seu e-mail e senha.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-violet-700"></div>
    </div>
  )
}
