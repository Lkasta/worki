/* eslint-disable react-hooks/rules-of-hooks */
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
import { useState } from 'react'
import { CheckboxCadDesk } from '../components/CheckboxCadDesk'
import { Footer } from '../components/Footer'
import { Input } from '../components/Input'
import { Header } from '../header/Header'

export default function cadDesk() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [address, setAddress] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplemnt] = useState('')
  const [price, setPrice] = useState(0.0)
  const [rating, setRating] = useState(5.0)
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')

  const handleCreateDesk = async () => {
    if (
      !name ||
      !description ||
      !city ||
      !postalCode ||
      !neighborhood ||
      !address ||
      !addressNumber ||
      !district ||
      !complement ||
      !price ||
      !rating ||
      !image1 ||
      !image2 ||
      !image3
    ) {
      try {
        const response = await fetch('/api/createDesk', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            description,
            city,
            postalCode,
            neighborhood,
            address,
            addressNumber,
            district,
            complement,
            price,
            rating,
            image1,
            image2,
            image3,
          }),
        })
        if (response.ok) {
          console.log('Desk criada com sucesso!')
        } else {
          console.error('Erro ao criar Desk')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
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
                onChange={(value) => setName(value)}
              />
              <Input
                type="text"
                placeholder="Descrição"
                label="Descrição"
                name="descricao"
                onChange={(value) => setDescription(value)}
                textArea
              />
            </div>
            <div className="h-[1px] w-full bg-zinc-300" />
            {/* Localização */}
            <h1 className="my-1 text-2xl">Localização</h1>
            <div className="pb-4">
              <div className="grid grid-cols-4 gap-5 ">
                <Input
                  type="text"
                  placeholder="12345-000"
                  label="CEP"
                  name="cep"
                  mask="00000-000"
                  onChange={(value) => setPostalCode(value)}
                />
                <Input
                  type="text"
                  placeholder="Cidade"
                  label="Cidade"
                  name="cidade"
                  onChange={(value) => setCity(value)}
                />
                <Input
                  type="text"
                  placeholder="Estado"
                  label="Estado"
                  name="state"
                  onChange={(value) => setDistrict(value)}
                />
                <Input
                  type="text"
                  placeholder="Bairro"
                  label="Bairro"
                  name="bairro"
                  onChange={(value) => setNeighborhood(value)}
                />
              </div>
              <div className="grid grid-cols-3 gap-5 ">
                <Input
                  type="text"
                  placeholder="Endereço"
                  label="Endereço"
                  name="endereco"
                  onChange={(value) => setAddress(value)}
                />
                <Input
                  type="text"
                  placeholder="Número"
                  label="Número"
                  name="numero"
                  onChange={(value) => setAddressNumber(value)}
                />
                <Input
                  type="text"
                  placeholder="Complemento"
                  label="Complemento"
                  name="complemento"
                  onChange={(value) => setComplemnt(value)}
                />
              </div>
            </div>
            <div className="h-[1px] w-full bg-zinc-300" />
            {/* O que o ambiente oferece */}
            <h1 className="my-1 text-2xl">O que o ambiente oferece:</h1>
            <div className="grid grid-cols-4 gap-5 pb-4">
              <CheckboxCadDesk icon={ForkKnife} title="Cozinha" />--
              <CheckboxCadDesk icon={WifiHigh} title="Internet no Local" />
              <CheckboxCadDesk icon={FrameCorners} title="Lousa Branca" />
              <CheckboxCadDesk icon={Folder} title="Armários" />--
              <CheckboxCadDesk icon={CarSimple} title="Estacionamento" />--
              <CheckboxCadDesk icon={Coffee} title="Máquina de Lanches" />
              <CheckboxCadDesk icon={Printer} title="Impressora" />
              <CheckboxCadDesk icon={Lock} title="Gavetas Pessoais" />--
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
            <button className="ml-auto rounded-lg border px-4 py-2 font-semibold text-zinc-700 shadow-sm hover:bg-zinc-100">
              Cancelar
            </button>
            <button className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-zinc-50 shadow-sm hover:bg-violet-500" onClick={handleCreateDesk}>
              Salvar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
