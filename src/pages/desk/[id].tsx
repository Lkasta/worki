/* eslint-disable @next/next/no-img-element */
// pages/desk/[id].tsx
'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'tailwindcss/tailwind.css'

import { Footer } from '@/app/components/Footer'
import { Header } from '@/app/header/Header'
import {
  Archive,
  Backpack,
  Car,
  Coffee,
  CookingPot,
  FrameCorners,
  MapPin,
  Monitor,
  Printer,
  PuzzlePiece,
  SketchLogo,
  Star,
  Storefront,
  Thermometer,
  WifiHigh,
} from '@phosphor-icons/react'

type RoomService = {
  service: {
    description: string
  }
}

interface RoomData {
  description: string
  city: string
  rating: string
  name: string
  Room_Services: RoomService[]
  image1: string
  image2: string
  image3: string
  price: number
  neighborhood: string
  address: string
  adressNumber: number
  complement: string
}
interface Feedback {
  user: {
    username: string
  }
  roomRating: {
    rating: number
  }
  id_feedback: number
  feedback: string
  username: string
  userID: number
  // Outras propriedades do feedback conforme necessário
}

export default function Desk() {
  const router = useRouter()
  const { id } = router.query

  const [roomData, setRoomData] = useState<RoomData | null>(null)
  const [servicesData, setServicesData] = useState<string[]>([])
  const [reservationError, setReservationError] = useState<string | null>(null)
  const [reservationSuccess, setReservationSuccess] = useState<string | null>(
    null,
  )
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [nextAvailableDate, setNextAvailableDate] = useState<string | null>(
    null,
  )
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]) // Adicionando estado para os feedbacks
  const [rating, setRating] = useState(0)

  useEffect(() => {
    if (id) {
      fetch(`/api/rooms/${id}`)
        .then((response) => response.json())
        .then((data: RoomData) => {
          setRoomData(data)
          setServicesData(
            data?.Room_Services?.map(
              (roomService) => roomService.service.description,
            ) || [],
          )
        })

      fetch(`/api/getFeedback?roomId=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => setFeedbacks(data))

      fetch(`/api/getRoomRating?roomId=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => setRating(data.averageRating))
        .catch((error) => console.error('Erro ao obter avaliações:', error))
    }
  }, [id])

  const renderStarIcons = (rating: number): JSX.Element[] => {
    const starIcons = []
    for (let i = 0; i < rating; i++) {
      starIcons.push(<Star key={i} size={20} weight="fill" color="#FFC700" />)
    }
    return starIcons
  }

  const handleReserve = async () => {
    setReservationError(null)
    setReservationSuccess(null)
    console.log(feedbacks)
    try {
      const currentDate = new Date().toISOString().split('T')[0]

      if (!startDate || startDate.toISOString().split('T')[0] <= currentDate) {
        setReservationError('A data escolhida deve ser maior que a data atual.')
        setNextAvailableDate(null)
        return
      }

      if (endDate && endDate < startDate) {
        setReservationError(
          'A data final não pode ser anterior à data inicial.',
        )
        setNextAvailableDate(null)
        return
      }

      const response = await fetch('/api/createReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId: id,
          startDate,
          endDate,
        }),
      })

      if (response.ok) {
        console.log('Quarto reservado com sucesso!')
        setReservationSuccess('Quarto reservado com sucesso!')
        setNextAvailableDate(null)
      } else {
        console.error('Erro ao reservar o quarto')

        const data = await response.json()

        if (
          response.status === 400 &&
          data.error === 'Room already reserved for the specified date'
        ) {
          setReservationError(
            'Este quarto já está reservado para a data especificada.',
          )
          setNextAvailableDate(data.nextAvailableDate)
        } else if (
          response.status === 400 &&
          data.error === 'Room already reserved for the specified date'
        ) {
          // Outro erro
          console.error('Erro ao reservar o quarto:', data.error)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const mapDescriptionToIcon = (description: string) => {
    console.log(description)

    switch (description) {
      case 'Armários':
        return <Archive size={21} className="text-4xl text-violet-700" />
      case 'Gavetas pessoais':
        return <Backpack size={21} className="text-4xl text-violet-700" />
      case 'Cozinha':
        return <CookingPot size={21} className="text-4xl text-violet-700" />
      case 'Estacionamento':
        return <Car size={21} className="text-4xl text-violet-700" />
      case 'Internet no Local':
        return <WifiHigh size={21} className="text-4xl text-violet-700" />
      case 'Lousa Branca':
        return <FrameCorners size={21} className="text-4xl text-violet-700" />
      case 'Máquina de Lanches':
        return <Coffee size={21} className="text-4xl text-violet-700" />
      case 'Impressora':
        return <Printer size={21} className="text-4xl text-violet-700" />
      case 'Monitor nas Mesas':
        return <Monitor size={21} className="text-4xl text-violet-700" />
      case 'Ambiente Climatizado':
        return <Thermometer size={21} className="text-4xl text-violet-700" />
      case 'Recepção':
        return <Storefront size={21} className="text-4xl text-violet-700" />
      case 'Ambiente Recreativo':
        return <PuzzlePiece size={21} className="text-4xl text-violet-700" />
      default:
        return null
    }
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-app-lg flex-col gap-4">
          <h1 className="pt-8 text-3xl font-bold "></h1>
          <div className="mt-[-10px] flex items-center gap-2">
            <div className="h-[3px] w-[3px] rounded-full bg-zinc-700"></div>
            <p>Valor por diária: R$ {roomData?.price}</p>
          </div>
          <div className="flex">
            {/* Imagem 1 */}
            <div className="mr-4 w-2/3">
              <img
                src={roomData?.image1}
                alt="Imagem 1"
                className="h-[466px] w-full rounded-l-2xl object-cover"
              />
            </div>

            {/* Imagem 2 e 3 */}
            <div className="w-1/3">
              <div className="mb-4 flex flex-col gap-4">
                <img
                  src={roomData?.image2}
                  alt="Imagem 2"
                  className="h-[222px] w-full rounded-tr-2xl object-cover"
                />
                <img
                  src={roomData?.image3}
                  alt="Imagem 3"
                  className="h-[228px] w-full rounded-br-2xl object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2/3">
              <h1 className="pb-4 text-2xl font-medium">{roomData?.name}</h1>
              <div className="h-[1px] w-full bg-zinc-300" />
              <h1 className="mt-4 pb-4 text-xl font-bold">
                O que esse lugar oferece:
              </h1>
              <div className="grid grid-cols-3 gap-2 pb-4">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 font-semibold"
                  >
                    {mapDescriptionToIcon(service)}
                    <p>{service}</p>
                  </div>
                ))}
              </div>
              <div className="h-[1px] w-full bg-zinc-300" />
              <div className="">
                <h1 className="py-4 text-xl font-bold">Descrição</h1>
                <p className="">{roomData?.description}</p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <MapPin
                  weight="fill"
                  className="font-bold text-violet-700"
                  size={16}
                />
                <p>
                  {roomData?.neighborhood} - {roomData?.city},{' '}
                  {roomData?.address}
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3579.439517800877!2d-52.67624863845961!3d-26.214904876974394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x94e552e2f75e980f%3A0xce45801dd2f91658!2sOne%20Coworking%20-%20R.%20Assis%20Brasil%2C%20608%20-%20Vila%20Isabel%2C%20Pato%20Branco%20-%20PR%2C%2085504-293!3m2!1d-26.216018!2d-52.672945999999996!5e0!3m2!1spt-BR!2sbr!4v1697842403434!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                loading="lazy"
                className="w-full rounded-lg"
                aria-controls="none"
              ></iframe>
              <div className="mt-4">
                <h2 className="mb-2 text-2xl font-bold">
                  Feedbacks dos Usuários
                </h2>
                {feedbacks.length > 0 ? (
                  <ul className="divide-y divide-violet-700">
                    {feedbacks.map((feedback) => (
                      <li key={feedback.id_feedback} className="py-4">
                        <div className="mb-2 flex items-center font-bold">
                          {feedback.user.username}
                          <div className="ml-2 flex">
                            {renderStarIcons(feedback.roomRating?.rating)}
                          </div>
                        </div>
                        <p>{feedback.feedback}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nenhum feedback disponível.</p>
                )}
              </div>
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
                <div className="flex gap-4">
                  <div className="w-1/2 text-center">
                    <label
                      htmlFor="startDate"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Data Inicial
                    </label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date: Date | null) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full px-7 text-gray-700"
                      id="startDate"
                    />
                  </div>
                  <div className="w-1/2 text-center">
                    <label
                      htmlFor="endDate"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Data Final
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date: Date | null) => setEndDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full px-7 text-gray-700"
                      id="endDate"
                    />
                  </div>
                </div>
                {reservationError && (
                  <div className="mt-4 rounded-md bg-red-500 p-2 text-white">
                    {reservationError}
                  </div>
                )}
                {reservationSuccess && (
                  <div className="mt-4 rounded-md bg-green-500 p-2 text-white">
                    {reservationSuccess}
                  </div>
                )}
                {nextAvailableDate && (
                  <div className="mt-4 rounded-md bg-yellow-600 p-2 text-white">
                    Este quarto estará disponível a partir do dia{' '}
                    {nextAvailableDate}.
                  </div>
                )}
                <button
                  className="mt-4 w-full rounded-md bg-violet-700 px-3 py-1.5 font-semibold text-white shadow hover:bg-violet-500"
                  onClick={handleReserve}
                >
                  Reservar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
