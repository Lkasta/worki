'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ElementListRent } from '../components/ElementListRent'
import { Header } from '../header/Header'

interface RentHistoryProps {
  id_rent_reserve: number
  room: {
    name: string
  }
  id_room: number
  userId: number
  data_initial_reserve: string
  data_final_reserve: string
  canceled: boolean
}

export default function RentHistory() {
  const [reservations, setReservations] = useState<RentHistoryProps[]>([])
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { parseCookies } = require('nookies')

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (!token) {
      router.push('/login')
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getRentHistory')
        const data = await response.json()

        if (response.status === 401) {
          router.push('/login')
        } else if (response.ok) {
          setReservations(data.data)
        } else {
          console.error('Erro ao buscar reservas:', data.error)
        }
      } catch (error) {
        console.error('Erro ao buscar reservas:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-app-lg flex-col gap-4">
          <h1 className="mt-10 text-[32px] font-bold">Histórico</h1>
          <div>
            {reservations.length === 0 ? (
              <div className="text-center text-gray-500">
                Não há reservas disponíveis ainda.
              </div>
            ) : (
              reservations.map((reservation) => (
                <ElementListRent
                  key={reservation.id_rent_reserve}
                  reservation={reservation}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
