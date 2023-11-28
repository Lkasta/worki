/* eslint-disable prettier/prettier */
'use client'
import {
  CarSimple,
  Coffee,
  Folder,
  ForkKnife,
  FrameCorners,
  Lock,
  Monitor,
  Printer,
  PuzzlePiece,
  Storefront,
  Thermometer,
  WifiHigh,
} from '@phosphor-icons/react'
import { CheckboxCadDesk } from '../components/CheckboxCadDesk'
import { Footer } from '../components/Footer'
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
            {/* Localização */}
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
            {/* O que o ambiente oferece */}
            <h1 className="my-1 text-2xl">O que o ambiente oferece:</h1>
            <div className="grid grid-cols-4 gap-5 pb-4">
              <CheckboxCadDesk icon={ForkKnife} title="Cozinha" />
              <CheckboxCadDesk icon={WifiHigh} title="Internet no Local" />
              <CheckboxCadDesk icon={FrameCorners} title="Lousa Branca" />
              <CheckboxCadDesk icon={Folder} title="Armários" />
              <CheckboxCadDesk icon={CarSimple} title="Estacionamento" />
              <CheckboxCadDesk icon={Coffee} title="Máquina de Lanches" />
              <CheckboxCadDesk icon={Printer} title="Impressora" />
              <CheckboxCadDesk icon={Lock} title="Gavetas Pessoais" />
              <CheckboxCadDesk icon={Monitor} title="Monitor nas Mesas" />
              <CheckboxCadDesk icon={Thermometer} title="Ambiente Climatizado" />
              <CheckboxCadDesk icon={Storefront} title="Recepção" />
              <CheckboxCadDesk icon={PuzzlePiece} title="Ambiente Recreativo" />
            </div> 
            <div className="h-[1px] w-full bg-zinc-300" />
            {/* Imagens */}
            <h1 className="my-1 text-2xl">Imagens</h1>
            <div className="grid grid-cols-3 gap-5 pb-4">
              <Input
                type="link"
                placeholder="Informe o link da Imagem..."
                label="Imagem 1"
                name="imagem"
              />
              <Input
                type="link"
                placeholder="Informe o link da imagem..."
                label="Imagem 2"
                name="imagem2"
              />
              <Input
                type="link"
                placeholder="Informe o link da imagem..."
                label="Imagem 3"
                name="imagem3"
              />
            </div>
          </div>
          <div className="h-[1px] w-full bg-zinc-300" />
          <div className="flex gap-4">
            <button className="ml-auto hover:bg-zinc-100 rounded-lg px-4 py-2 font-semibold text-zinc-700 border shadow-sm">Cancelar</button>
            <button className="hover:bg-violet-500 rounded-lg bg-violet-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm">Salvar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) 
}
