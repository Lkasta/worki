'use client'
import { ForkKnife } from '@phosphor-icons/react'
import { useState } from 'react'
import { Input } from '../components/Input'
import { Header } from '../header/Header'

export default function NovoCadastro() {
  function CustomCheckbox() {
    const [checked, setChecked] = useState(false)

    const toggleCheckbox = () => {
      setChecked(!checked)
    }
  }
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
              onChange={function (value: string): void {
                throw new Error('Function not implemented.')
              }}
            />
          </div>
          <div className="">
            <h1 className="">Descricao</h1>
            <Input
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              name="novoCadastro"
              textArea={true}
              onChange={function (value: string): void {
                throw new Error('Function not implemented.')
              }}
            />
          </div>
          <div className="h-[1px] w-full bg-zinc-300" />
          <div className="">
            <h1 className="text-2xl font-medium">Localização</h1>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <Input
              type="text"
              name="novoCadastro"
              placeholder="CEP"
              label="CEP"
            />
            <Input
              type="text"
              name="novoCadastro"
              placeholder="Cidade"
              label="Cidade"
            />
            <Input
              type="text"
              name="novoCadastro"
              placeholder="Bairro"
              label="Bairro"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              name="novoCadastro"
              placeholder="Endereço"
              label="Endereço"
            />
            <Input
              type="text"
              name="novoCadastro"
              placeholder="Complemento"
              label="Complemento"
            />
          </div>
          <div className="h-[1px] w-full bg-zinc-300" />
          <div className="">
            <h1 className="text-2xl font-medium">O que o ambiente ofereçe</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex w-min items-center gap-2">
              <ForkKnife size={20} weight="bold" />
              <p>Cozinha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
