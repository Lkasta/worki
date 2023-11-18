'use client'
import { useEffect, useState } from 'react'
import { ElementListRent } from '../components/ElementListRent'
import { Header } from '../header/Header'

interface RentHistoryProps {
  id_rent_reserve: number
  room: {
    description: string
  }
  userId: number
  data_initial_reserve: string
  status: string
}

export default function RentHistory() {
  const [reservations, setReservations] = useState<RentHistoryProps[]>([])

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch('/api/getRentHistory')
      const data = await response.json()

      setReservations(data.data)
      console.log(data.data)
    }

    fetchReservations()
  }, [])

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-app-lg flex-col gap-4">
          <h1 className="mt-10 text-[32px] font-bold">Histórico</h1>
          <div>
            {reservations.map((reservation) => (
              <ElementListRent
                key={reservation.id_rent_reserve}
                reservation={reservation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
