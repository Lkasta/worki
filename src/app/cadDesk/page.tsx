'use client'
import { CheckboxCadDesk } from '../components/CheckboxCadDesk'
import { Input } from '../components/Input'
import { Header } from '../header/Header'

export default function cadDesk() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-app-lg flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="my-1 mt-6 text-2xl">Novo Cadastro</h1>
            <div className="mb-3 flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Título"
                label="Título"
                name="titulo"
              />
              <Input
                type="text"
                placeholder="Descrição"
                label="Descrição"
                name="descricao"
                textArea
              />
            </div>
            <div className="h-[1px] w-full bg-zinc-300" />
            <h1 className="my-1 text-2xl">Localização</h1>
            <div className="grid grid-cols-3 gap-5 pb-4">
              <Input
                type="text"
                placeholder="12345-000"
                label="CEP"
                name="cep"
                mask="00000-000"
              />
              <Input
                type="text"
                placeholder="Cidade"
                label="Cidade"
                name="cidade"
              />
              <Input
                type="text"
                placeholder="Bairro"
                label="Bairro"
                name="bairro"
              />
              <Input
                type="text"
                placeholder="Endereço"
                label="Endereço"
                name="endereco"
              />
              <Input
                type="text"
                placeholder="Número"
                label="Número"
                name="numero"
              />
              <Input
                type="text"
                placeholder="Complemento"
                label="Complemento"
                name="complemento"
              />
            </div>
            <div className="h-[1px] w-full bg-zinc-300" />
            <h1 className="my-1 text-2xl">O que o ambiente oferece:</h1>
            <div className="">
              <CheckboxCadDesk />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
