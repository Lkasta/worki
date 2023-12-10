'use client'
import { BookmarkSimple, Star } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface CardDeskProps {
  description: string
  city: string
  district: string
  price: number
  rating: number
  id: number
  name: string
  image1: string
  // Adicione o ID como uma propriedade
}

export function CardDesk({
  city,
  district,
  price,
  rating,
  id,
  name,
  image1, // Adicione o ID como uma propriedade
}: CardDeskProps) {
  const router = useRouter()

  // Direcione o usuário para a página "desk" com o ID do card
  const handleClickCard = () => {
    console.log(id)
    router.push(`/desk/${id}`) // Direcione o usuário para a página "desk" com o ID do card
  }

  return (
    <div
      className="relative w-[183] cursor-pointer rounded-lg border border-gray-300 p-2.5 shadow"
      onClick={handleClickCard}
    >
      <img
        src={image1}
        className="mb-2 h-52 w-img-card-desk rounded-lg object-cover"
        alt="a"
      />
      <div className="absolute right-4 top-4 flex flex-col items-end gap-2.5 shadow-md">
        <div className="flex items-center justify-center gap-1 rounded-full bg-white p-1 px-2">
          <p className="text-sm font-bold">{rating}</p>
          <Star size={20} weight="fill" color="#FFC700" />
        </div>
        <div className="flex items-center justify-center gap-1 rounded-full bg-white p-1">
          <BookmarkSimple size={20} weight="fill" color="#FFC700" />
        </div>
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <h1 className="text-sm font-bold text-zinc-400">
        {city} - {district}
      </h1>
      <div className="flex content-between items-center justify-center">
        <p className="text-xs font-bold">R$ {price}</p>
        <div className="ml-auto max-w-min rounded-full bg-violet-200 px-2 py-1">
          <p className="text-xs font-bold uppercase text-violet-700">Basic</p>
        </div>
      </div>
    </div>
  )
}
