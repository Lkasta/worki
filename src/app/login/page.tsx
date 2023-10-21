import { useState } from 'react'
import { Input } from '../components/Input'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      })

      if (response.ok) {
        // Se a autenticação for bem-sucedida, você pode obter o token da resposta
        const data = await response.json()
        const token = data.token

        // Armazene o token no armazenamento local
        localStorage.setItem('token', token)

        // Redirecione o usuário para a página protegida ou realize outra ação apropriada
      } else {
        // Trate o erro de autenticação, como exibir uma mensagem de erro para o usuário
      }
    } catch (error) {
      // Trate os erros de rede ou outros erros
      console.error(error)
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
              />
            </div>
            <div className="input ">
              <Input
                name="password"
                type="password"
                label="Senha"
                placeholder="•••••••••••••"
              />
            </div>

            <button className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm hover:bg-violet-500">
              Entrar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-violet-700"></div>
    </div>
  )
}
