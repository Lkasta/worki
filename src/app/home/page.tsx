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
}

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { parseCookies } = require('nookies')
  const router = useRouter()
  const [searchName, setSearchName] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([])

  const handleSearch = () => {
    console.log('oi entrou')
    const filteredResults = roomData.filter((room) => {
      const nameMatch = room.name
        .toLowerCase()
        .includes(searchName.toLowerCase())
      const cityMatch = room.city
        .toLowerCase()
        .includes(searchCity.toLowerCase())
      return nameMatch && cityMatch
    })

    console.log(filteredResults)
    setFilteredRooms(filteredResults)
  }

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (!token) {
      router.push('/login')
    }
    console.log(token)
  }, [])

  const { user } = useContext(AuthContext)

  const [roomData, setRoomData] = useState<Room[]>([])

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

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-52 w-full items-center justify-center bg-violet-600">
          {user?.username && (
            <h1 className="text-center text-5xl font-bold text-white">
              <p>Olá {getFirstName(user.username)}!</p> Os mais próximo para
              você...
            </h1>
          )}
        </div>
        <div className="elemento relative top-1/2 flex w-app-lg translate-y-[-50%] gap-6 rounded-lg border border-gray-300 bg-white p-6 shadow">
          <Input
            name="search"
            type="text"
            placeholder="Pesquise por nome"
            value={searchName}
            onChange={(value) => setSearchName(value)}
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
            onClick={handleSearch}
          >
            Buscar Agora
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-app-lg">
            <h1 className="mb-2 text-2xl font-bold">Resultados</h1>
            <div className="flex flex-wrap justify-between gap-4 ">
              {filteredRooms.length > 0
                ? filteredRooms.map((room) => (
                    <CardDesk
                      key={room.id_room}
                      description={room.description}
                      city={room.city}
                      district={room.district}
                      price={room.price}
                      rating={room.rating}
                      id={room.id_room}
                      name={room.name}
                    />
                  ))
                : roomData.map((room) => (
                    <CardDesk
                      key={room.id_room}
                      description={room.description}
                      city={room.city}
                      district={room.district}
                      price={room.price}
                      rating={room.rating}
                      id={room.id_room}
                      name={room.name}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
