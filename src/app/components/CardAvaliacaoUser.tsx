'use client'
import { DotsThreeVertical, Star, UserCircle } from '@phosphor-icons/react'

export function CardAvaliacaoUser() {
  return (
    <div className="rounded-lg border border-zinc-300 bg-white p-1">
      <div className="m-1 ">
        {/* Title */}
        <div className="mb-2 flex items-center gap-1">
          <h2 className="text-sm font-bold">Nome da Desk</h2>
          <h2 className="text-xs">•</h2>
          <h2 className="text-sm">12/23</h2>
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
                <h3 className="font-black text-gray-900">Joninhas Craft</h3>
                <h2 className="text-xs">•</h2>
                <div className="flex items-center gap-1">
                  <Star size={13} weight="fill" color="#FFC700" />
                  <Star size={13} weight="fill" color="#FFC700" />
                  <Star size={13} weight="fill" color="#FFC700" />
                  <Star size={13} weight="fill" color="#FFC700" />
                  <Star size={13} weight="fill" color="#8b8b8b" />
                </div>
              </div>

              <p
                placeholder="Avaliação do usuário..."
                className="font-semibold"
              >
                Uma grande merda de lugar, nunca mais vou nessa bos tabostabos
                tabost abost abostabost abostab ostabo stabostab stabo sta bosta
                stabo stabosta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
