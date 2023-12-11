'use client'
import { AuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { CardDesk } from '../components/CardDesk'
import { Footer } from '../components/Footer'
import { Input } from '../components/Input'
import { Header } from '../header/Header'

interface Room {
  id_room: number
  description: string
  city: string
  district: string
  price: number
  rating: number
  name: string
  image1: string
}

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { parseCookies } = require('nookies')
  const [searchName, setSearchName] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([])
  const [roomData, setRoomData] = useState<Room[]>([])
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const router = useRouter()

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (!token) {
      router.push('/login')
    }
    console.log(token)
  }, [])

  const { user } = useContext(AuthContext)

  function getFirstName(fullName: string) {
    const nameParts = fullName.split(' ')
    const firstName = nameParts[0]

    return firstName
  }

  useEffect(() => {
    fetch('/api/rooms')
      .then((response) => response.json())
      .then((data) => {
        setRoomData(data.data)
        console.log(data.data)
      })
  }, [])

  const handleSearchRooms = () => {
    fetch(`/api/rooms?startDate=${startDate}&endDate=${endDate}`)
      .then((response) => response.json())
      .then((data) => {
        const filteredResults = data.data.filter((room: Room) => {
          const cityMatch = room.city
            .toLowerCase()
            .includes(searchCity.toLowerCase())
          return cityMatch
        })

        setRoomData(filteredResults) // Atualize o estado com os dados da API
      })
      .catch((error) => {
        console.error('Erro ao buscar quartos:', error)
      })
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-52 w-full items-center justify-center bg-violet-600">
          {user?.username && (
            <h1 className="text-center text-5xl font-bold text-white">
              <p>Olá {getFirstName(user.username)}!</p> Busque o mais próximo de
              você...
            </h1>
          )}
        </div>

        <div className="elemento relative top-1/2 mt-2 flex w-app-lg translate-y-[-50%] gap-6 rounded-lg border border-gray-300 bg-white p-6 shadow">
          <Input
            name="startDate"
            type="date"
            placeholder="Data Inicial"
            value={startDate}
            onChange={(value) => setStartDate(value)}
          />
          <Input
            name="endDate"
            type="date"
            placeholder="Data Final"
            value={endDate}
            onChange={(value) => setEndDate(value)}
          />
          <Input
            name="search"
            type="text"
            placeholder="Selecione uma cidade"
            value={searchCity}
            onChange={(value) => setSearchCity(value)}
          />
          <button
            className="w-2/6 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold uppercase text-zinc-50 shadow-sm hover:bg-violet-500"
            onClick={handleSearchRooms}
          >
            Buscar
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-app-lg">
            <h1 className="mb-2 text-2xl font-bold">Resultados</h1>
            <div className="flex flex-wrap gap-5 ">
              {roomData.length > 0 ? (
                roomData.map((room) => (
                  <CardDesk
                    key={room.id_room}
                    description={room.description}
                    city={room.city}
                    district={room.district}
                    price={room.price}
                    id={room.id_room}
                    name={room.name}
                    image1={room.image1}
                  />
                ))
              ) : (
                <p>Ops... infelizmente nenhuma sala foi encontrada.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
