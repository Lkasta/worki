'use client'

import { CardAvaliacaoUser } from '../components/CardAvaliacaoUser'
import { ElementListRentAdmin } from '../components/ElementListRentAdmin'
import { Header } from '../header/Header'

import { Star } from '@phosphor-icons/react'

export default function managementRents() {
  return (
    <div>
      <Header />
      <div className="flex h-40 w-full items-center justify-center bg-violet-600">
        <h1 className="text-center text-5xl font-bold text-white">
          <p>Olá Cabiçulinha!</p>
        </h1>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="flex w-app-lg gap-4">
          {/* Reputação Geral */}
          <div className="w-5/12">
            <h1 className="mb-4 text-2xl font-bold">Reputação Geral</h1>
            <div className="flex max-h-[426px] flex-col gap-2.5 overflow-y-scroll rounded-lg border border-zinc-300 bg-zinc-100 p-4">
              {/* Avaliacao */}
              <div className="flex flex-col gap-2.5">
                <h2 className="font-bold">Avaliação Geral</h2>
                <div className="flex gap-4">
                  <div className="text-6xl font-bold">4,9</div>
                  <Star size={60} weight="fill" color="#FFC700" />
                </div>
              </div>
              {/* Historco de Avaliacoes */}
              <h2 className="font-bold">Últimas Avaliações</h2>
              <CardAvaliacaoUser />
              <CardAvaliacaoUser />
              <CardAvaliacaoUser />
              <CardAvaliacaoUser />
              <CardAvaliacaoUser />
              <CardAvaliacaoUser />
              <CardAvaliacaoUser />
            </div>
          </div>
          <div className="ml-auto w-7/12">
            <h1 className="mb-4 text-2xl font-bold">
              Gerenciamento de Reservas
            </h1>
            <div className="flex max-h-[426px] flex-col gap-2.5 overflow-y-scroll rounded-lg border border-zinc-300 bg-zinc-100 p-4">
              {/* Historco de Avaliacoes */}
              <h2 className="font-bold">Ultimas Reservas</h2>
              <ElementListRentAdmin />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
