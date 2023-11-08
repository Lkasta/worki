'use client'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext, useState } from 'react'
import { Input } from '../components/Input'

export default function Login() {
  const [email, setEmail] = useState('')
  const [emailCadastro, setEmailCadastro] = useState('')
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('')
  const [CPF, setCPF] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const [showWarningCad, setShowWarningCad] = useState(false)
  const [warningEmailCpf, setWarningEmailCpf] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(true)
  const { signIn, isError } = useContext(AuthContext)

  const handleSignIn = () => {
    if (!email || !password) {
      setShowWarning(true)
    } else {
      setShowWarning(false)
      signIn({ email, password })
    }
  }

  const handleCreateUser = async () => {
    if (!nome || !emailCadastro || !senha || !confirmaSenha || !CPF) {
      setShowWarningCad(true) // Define o aviso para campos em branco
      return
    }

    if (senha !== confirmaSenha) {
      setShowWarningCad(true)
      return
    }

    try {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email: emailCadastro, senha, CPF }),
      })

      if (response.ok) {
        // O usuário foi criado com sucesso, você pode lidar com a resposta aqui, se necessário
        console.log('Usuário criado com sucesso!')
      } else {
        // Algo deu errado na criação do usuário
        console.error('Erro ao criar usuário')
        setShowWarningCad(false)
        setWarningEmailCpf(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleToggleScreen = () => {
    setIsLoggingIn(!isLoggingIn)
    setShowWarning(false)
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

          <div className="flex flex-col gap-2.5">
            {}
            {isLoggingIn ? (
              <>
                <div className="">
                  <Input
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(value) => setEmail(value)}
                  />
                </div>
                <div className="input">
                  <Input
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="•••••••••••••"
                    value={password}
                    onChange={(value) => setPassword(value)}
                  />
                </div>

                {showWarning && (
                  <div className="text-red-500">
                    Preencha o e-mail e a senha antes de enviar.
                  </div>
                )}

                <button
                  className="hover-bg-violet-500 rounded-lg bg-violet-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm"
                  onClick={handleSignIn}
                >
                  Entrar
                </button>
              </>
            ) : (
              <>
                <div className="">
                  <Input
                    name="nome"
                    type="text"
                    label="Nome"
                    placeholder="Japodih Almosah"
                    value={nome}
                    onChange={(value) => setNome(value)}
                  />
                </div>
                <div className="">
                  <Input
                    name="cpf"
                    type="text"
                    label="CPF"
                    placeholder="111.222.333-44"
                    value={CPF}
                    onChange={(value) => setCPF(value)}
                  />
                </div>
                <div className="">
                  <Input
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="name@example.com"
                    value={emailCadastro}
                    onChange={(value) => setEmailCadastro(value)}
                  />
                </div>
                <div className="">
                  <Input
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="•••••••••••••"
                    value={senha}
                    onChange={(value) => setSenha(value)}
                  />
                </div>
                <div className="input">
                  <Input
                    name="password"
                    type="password"
                    label="Senha"
                    placeholder="•••••••••••••"
                    value={confirmaSenha}
                    onChange={(value) => setConfirmaSenha(value)}
                  />
                </div>

                <button
                  className="hover-bg-violet-500 rounded-lg bg-violet-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm"
                  onClick={handleCreateUser}
                >
                  Finalizar Cadastro
                </button>
                {showWarningCad && (
                  <div className="text-red-500">
                    Preencha todos os campos antes de enviar e certifique-se que
                    as senhas estão iguais.
                  </div>
                )}
                {warningEmailCpf && (
                  <div className="text-red-500">
                    Não foi possível criar o usuário, verifique se o seu e-mail
                    já está cadastrado na plataforma.
                  </div>
                )}
              </>
            )}

            {isError && (
              <div className="text-red-500">
                Credenciais inválidas. Por favor, verifique seu e-mail e senha.
              </div>
            )}
            {isLoggingIn ? (
              <div className="flex justify-between font-semibold">
                <button>
                  <p className="text-zinc-700 hover:underline">
                    Esqueceu a senha?
                  </p>
                </button>
                <button onClick={handleToggleScreen}>
                  <p className="text-violet-700 hover:underline">Criar conta</p>
                </button>
              </div>
            ) : (
              <div className="flex justify-between font-semibold">
                <button>
                  <p className="text-zinc-700 hover:underline">
                    Esqueceu a senha?
                  </p>
                </button>
                <button onClick={handleToggleScreen}>
                  <p className="text-violet-700 hover:underline">Fazer Login</p>
                </button>
              </div>
            )}

            <button
              className="cursor-pointer text-blue-500"
              onClick={handleToggleScreen}
            ></button>
          </div>
        </div>
      </div>
      <div className="bg-violet-700"></div>
    </div>
  )
}
