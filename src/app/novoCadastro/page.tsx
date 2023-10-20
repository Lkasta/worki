import { Input } from '../components/Input'
import { Header } from '../header/Header'

export default function NovoCadastro() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-app-lg flex-col gap-4">
          <h1 className="pt-8 text-2xl font-medium">Novo Cadastro</h1>
          <div className="">
            <h1 className="">Título</h1>
            <Input
              type="text"
              placeholder="Novo Cadastro"
              name="novoCadastro"
            />
          </div>
          <div className="">
            <h1 className="">Descricao</h1>
            <Input
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              name="novoCadastro"
              textArea={true}
            />
          </div>
          <div className="h-[1px] w-full bg-zinc-300" />
          <div className="">
            <h1 className="text-2xl font-medium">Localização</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
