/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
'use client'
import { useEffect, useState } from 'react'
import { CheckboxCadDesk } from '../components/CheckboxCadDesk'
import { Footer } from '../components/Footer'
import { Input } from '../components/Input'
import { Header } from '../header/Header'

interface services {
  id_service: number,
  description: string
}

export default function cadDesk() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [address, setAddress] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [price, setPrice] = useState(0.0)
  const [rating, setRating] = useState(5.0)
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [services, setServices] = useState<services[] | null>(null)
  const [selectedServices, setSelectedServices] = useState<number[]>([])

  useEffect(() => {
    fetch('/api/getServices')
      .then((response) => response.json())
      .then((data) => {
        setServices(data.data)
        console.log(data.data)
      })
  }, [])

  const handleServiceCheckboxChange = (serviceId: number) => {
    console.log('veio aqui', serviceId)
    if (selectedServices.includes(serviceId)) {
      setSelectedServices((prevSelectedServices) =>
        prevSelectedServices.filter((id) => id !== serviceId)
      );
    } else {
      setSelectedServices((prevSelectedServices) =>
        [...prevSelectedServices, serviceId]
      );
    }
  };

  const handleCreateDesk = async () => {
    console.log('entrou')
   
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
            services: selectedServices,
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
              <div className="grid grid-cols-4 gap-5 ">
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
                  onChange={(value) => setComplement(value)}
                />
                <Input
                  type="number"
                  placeholder="Preço"
                  label="Preço"
                  name="Preço"
                  onChange={(value) => setPrice(parseFloat(value))}
                />
              </div>
            </div>
            <div className="h-[1px] w-full bg-zinc-300" />
            {/* O que o ambiente oferece */}
            <h1 className="my-1 text-2xl">O que o ambiente oferece:</h1>
            <div className="grid grid-cols-4 gap-5 pb-4">
              {services && services.map((service) => (
                <CheckboxCadDesk
                  key={service.id_service}
                  title={service.description}
                  onClick={() => handleServiceCheckboxChange(service.id_service)}
                  checked={selectedServices.includes(service.id_service)}
                  serviceID={service.id_service}
                />
              ))}
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
                onChange={(value) => setImage1(value)}
              />
              <Input
                type="link"
                placeholder="Informe o link da imagem..."
                label="Imagem 2"
                name="imagem2"
                onChange={(value) => setImage2(value)}
              />
              <Input
                type="link"
                placeholder="Informe o link da imagem..."
                label="Imagem 3"
                name="imagem3"
                onChange={(value) => setImage3(value)}
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
