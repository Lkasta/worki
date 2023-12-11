'use client'

import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { CardAvaliacaoUser } from '../components/CardAvaliacaoUser'
import { ElementListRentAdmin } from '../components/ElementListRentAdmin'
import { Header } from '../header/Header'

export interface RentReserve {
  id_rent_reserve: number
  id_user: number
  id_room: number
  canceled: boolean
  data_initial_reserve: string
  data_final_reserve: string
}

export interface RoomRating {
  id_room_rating: number
  id_user: number
  id_feedback: number // Alterado para refletir o relacionamento correto
  id_room: number
  rating: number
}

export interface User {
  id_user: number
  username: string
  email: string
  password: string
  cpf: string
  RentReserve: RentReserve[]
  RoomRating: RoomRating[]
}

export interface Feedback {
  id_feedback: number
  id_user: number
  id_room: number
  feedback: string
  user: User // Alterado para ser opcional
  roomRating: RoomRating // Alterado para ser opcional
  // Adicione outros campos importantes, se necessário
}
export interface Room {
  id_room: number
  name: string
  rating: number
  image1: string
  image2: string
  image3: string
  id_user: number | null
  RentReserve: RentReserve[]
  Feedback: Feedback[]
  user: User | null
  RoomRating: RoomRating[]
}
// eslint-disable-next-line camelcase
export default function ManagementRents() {
  const [userRoomsFeedbacks, setUserRoomsFeedbacks] = useState<Room[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch('/api/getUserRoomsFeedbacks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data) // Adicione esta linha para verificar a estrutura dos dados
        setUserRoomsFeedbacks(data)
      })
      .catch((error) =>
        console.error('Erro ao obter quartos e feedbacks do usuário:', error),
      )
  }, [])

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (!token) {
      router.push('/login')
    }
    console.log(token)
  }, [])

  return (
    <div>
      <Header />
      <div className="flex h-40 w-full items-center justify-center bg-violet-600">
        <h1 className="text-center text-5xl font-bold text-white">
          <p>Olá! Gerencie as suas salas...</p>
        </h1>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="flex w-app-lg gap-4">
          {/* Reputação Geral */}
          <div className="w-5/12">
            <h1 className="mb-4 text-2xl font-bold">Reputação Geral</h1>
            <div className="flex max-h-[426px] flex-col gap-2.5 overflow-y-scroll rounded-lg border border-zinc-300 bg-zinc-100 p-4">
              {/* Historco de Avaliacoes */}
              <h2 className="font-bold">Últimas Avaliações</h2>
              {userRoomsFeedbacks.map((room) =>
                room.Feedback.map((feedback) => (
                  <CardAvaliacaoUser
                    key={feedback.id_feedback}
                    nameUser={feedback.user.username}
                    nameDesk={room.name}
                    feedback={feedback.feedback}
                    stars={feedback.roomRating?.rating}
                  />
                )),
              )}
            </div>
          </div>
          <div className="ml-auto w-7/12">
            <h1 className="mb-4 text-2xl font-bold">
              Gerenciamento de Reservas
            </h1>
            <div className="flex max-h-[426px] flex-col gap-2.5 overflow-y-scroll rounded-lg border border-zinc-300 bg-zinc-100 p-4">
              {/* Historco de Avaliacoes */}
              <h2 className="font-bold">Ultimas Reservas</h2>
              {userRoomsFeedbacks.map((room) => (
                <div key={room.id_room}>
                  {room.RentReserve.map((reservation) => (
                    <ElementListRentAdmin
                      key={reservation.id_rent_reserve}
                      deskName={room.name}
                      cancelado={reservation.canceled}
                      initialDate={reservation.data_initial_reserve}
                      finalDate={reservation.data_final_reserve}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
