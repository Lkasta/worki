'use client'
import { DotsThreeVertical, UserCircle } from '@phosphor-icons/react'

interface CardAvaliacaoUProps {
  nameUser: string
  nameDesk: string
  feedback: string
  stars: number
}

export function CardAvaliacaoUser({
  nameUser,
  nameDesk,
  feedback,
  stars,
}: CardAvaliacaoUProps) {
  return (
    <div className="rounded-lg border border-zinc-300 bg-white p-1">
      <div className="m-1 ">
        {/* Title */}
        <div className="mb-2 flex items-center gap-1">
          <h2 className="text-sm font-bold">{nameDesk}</h2>
          <DotsThreeVertical
            size={16}
            weight="bold"
            className="ml-auto cursor-pointer rounded-full hover:bg-zinc-200"
          />
        </div>
        <div className="">
          <div className="flex min-h-fit gap-2 rounded-lg bg-zinc-100 p-2">
            <div className="">
              <UserCircle size={28} weight="fill" color="#8b8b8b" />
            </div>
            <div className="w-auto">
              <div className="flex items-center gap-2">
                <h3 className="font-black text-gray-900">{nameUser}</h3>
                <h2 className="text-xs">•</h2>
                <div className="flex items-center gap-1">
                  <p>{stars} estrelas</p>
                </div>
              </div>

              <p
                placeholder="Avaliação do usuário..."
                className="font-semibold"
              >
                {feedback}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
