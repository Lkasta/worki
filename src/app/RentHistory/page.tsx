'use client'
import { AuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
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
  const { user } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch('/api/getRentHistory')
      const data = await response.json()

      setReservations(data.data)
    }

    fetchReservations()
  }, [])

  useEffect(() => {
    if (!user) {
      router.push('/home')
    }
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
