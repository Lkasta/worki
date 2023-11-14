// pages/desk/[id].tsx
'use client'
import { Header } from '@/app/header/Header'
import {
  CarSimple,
  Coffee,
  ForkKnife,
  MapPin,
  Monitor,
  SketchLogo,
  Thermometer,
  WifiHigh,
} from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'

interface RoomData {
  description: string
  city: string
  rating: string
}

export default function Desk() {
  const router = useRouter()
  const { id } = router.query
  const [roomData, setRoomData] = useState<RoomData | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>('')

  useEffect(() => {
    if (id) {
      console.log('entrou aqui')
      fetch(`/api/rooms/${id}`)
        .then((response) => response.json())
        .then((data: RoomData) => {
          setRoomData(data)
        })
    }
  }, [id])

  const handleReserve = async () => {
    try {
      const token = localStorage.getItem('nextauth.token') // Altere para o nome do cookie que você está usando
      const response = await fetch('/api/createReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          roomId: id,
          date: selectedDate,
        }),
      })

      if (response.ok) {
        console.log('Quarto reservado com sucesso!')
      } else {
        console.error('Erro ao reservar o quarto')
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
          <h1 className="pt-8 text-3xl font-bold "></h1>
          <div className="mt-[-10px] flex items-center gap-2">
            <p>{roomData?.rating}</p>
            <div className="h-[3px] w-[3px] rounded-full bg-zinc-700"></div>
            <p>{roomData?.city}</p>
            <p>{roomData?.description}</p>
          </div>
          <div className="flex">
            {/* Imagem 1 */}
            <div className="mr-4 w-2/3">
              <img
                src="https://static.vitra.com/media/asset/1699747/storage/v_fullbleed_1440x/21124166.jpg"
                alt="Imagem 1"
                className="h-[466px] w-full rounded-l-2xl object-cover"
              />
            </div>
            <div className="w-1/3">
              <div className="mb-4 flex flex-col gap-4">
                <img
                  src="https://spaces-wp.imgix.net/2021/11/module3_desks-720x800.jpeg?auto=compress,format&q=50"
                  alt="Imagem 2"
                  className="h-[222px] w-full rounded-tr-2xl object-cover"
                />
                <img
                  src="https://d1y4va1nna2r1p.cloudfront.net/spaces/b8e4d45d-6bf1-417e-8b5f-351ed7ebe6a6.jpeg"
                  alt="Imagem 3"
                  className="h-[228px] w-full rounded-br-2xl object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2/3">
              <h1 className="pb-4 text-2xl font-medium">
                Mesa para trabalho: Hospedado por CoworkingInPato
              </h1>
              <div className="h-[1px] w-full bg-zinc-300" />
              <h1 className="mt-4 pb-4 text-xl font-bold">
                O que esse lugar oferece:
              </h1>
              <div className="grid grid-cols-2 gap-2 pb-4">
                <div className="flex w-min items-center gap-2 font-semibold">
                  <ForkKnife size={20} weight="bold" />
                  <p>Cozinha</p>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <CarSimple size={20} weight="bold" />
                  <p>Estacionamento</p>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Monitor size={20} weight="bold" />
                  <p>Monitor nas Mesas</p>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <WifiHigh size={20} weight="bold" />
                  <p>Wifi</p>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Coffee size={20} weight="bold" />
                  <p>Café</p>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Thermometer size={20} weight="bold" />
                  <p>Ambiente Climatizado</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-zinc-300" />
              <h1 className="py-4 text-xl font-bold">Descrição</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex items-center gap-2 py-2">
                <MapPin
                  weight="fill"
                  className="font-bold text-violet-700"
                  size={16}
                />
                <p>Centro - Pato Branco</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3579.439517800877!2d-52.67624863845961!3d-26.214904876974394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x94e552e2f75e980f%3A0xce45801dd2f91658!2sOne%20Coworking%20-%20R.%20Assis%20Brasil%2C%20608%20-%20Vila%20Isabel%2C%20Pato%20Branco%20-%20PR%2C%2085504-293!3m2!1d-26.216018!2d-52.672945999999996!5e0!3m2!1spt-BR!2sbr!4v1697842403434!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                loading="lazy"
                className="w-full rounded-lg"
                aria-controls="none"
              ></iframe>
            </div>
            <div className="flex w-1/3 flex-col gap-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex h-full">
                    <SketchLogo
                      size={32}
                      className="text-4xl text-violet-700"
                    />
                  </div>
                  <p className="font-semibold">
                    Pera ai, esse ambiente é incluso no plano{' '}
                    <span className="text-violet-700">Premium!</span> Aproveite
                    as vantagens exclusivas com esse plano.
                  </p>
                </div>
                <button className="mt-4 w-full rounded-md bg-violet-700 px-3 py-1.5 font-semibold text-white shadow hover:bg-violet-500">
                  Aproveite todas as vantagens!
                </button>
              </div>
              <div className="rounded-md border p-4">
                <input
                  type="date"
                  className="w-full text-gray-700"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <button
                  onClick={handleReserve}
                  className="mt-4 w-full rounded-md bg-violet-700 px-3 py-1.5 font-semibold text-white shadow hover:bg-violet-500"
                >
                  Reservar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
