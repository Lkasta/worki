'use client'
import { DropDownHistory } from './DropDownHistory'
interface ReservationProps {
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

/* eslint-disable @next/next/no-img-element */
export function ElementListRent({
  reservation,
}: {
  reservation: ReservationProps
}) {
  function formatarData(dataString: string) {
    const diasSemana = [
      'domingo',
      'segunda-feira',
      'terça-feira',
      'quarta-feira',
      'quinta-feira',
      'sexta-feira',
      'sábado',
    ]

    const data = new Date(dataString)

    // Ajusta o fuso horário para o fuso horário local
    const dataLocal = new Date(
      data.getTime() - data.getTimezoneOffset() * 60000,
    )

    const dia = dataLocal.getDate() + 1
    const mes = dataLocal.getMonth() + 1 // Mês começa do zero, então é necessário adicionar 1
    const ano = dataLocal.getFullYear()
    const diaSemana = diasSemana[dataLocal.getDay()]

    // Adiciona zeros à esquerda se necessário
    const diaFormatado = dia < 10 ? `0${dia}` : dia
    const mesFormatado = mes < 10 ? `0${mes}` : mes

    return `${diaFormatado}-${mesFormatado}-${ano}`
  }

  return (
    <div className="my-4 flex h-20 justify-between overflow-auto rounded-lg border border-zinc-200 pr-5">
      <div className="flex min-w-0 items-center gap-x-4">
        <div
          className={`h-full w-2 ${
            reservation.canceled ? 'bg-red-500' : 'bg-violet-700'
          }`}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {reservation.room.name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            CoworkingInPato
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Data de início {formatarData(reservation.data_initial_reserve)} | Data
          de término: {formatarData(reservation.data_final_reserve)}
        </p>
        <span
          className={`flex h-2.5 w-2.5 rounded-full ${
            reservation.canceled ? 'bg-red-500' : 'bg-violet-700'
          }`}
        />
        <p className="text-sm leading-6 text-gray-900">
          {reservation.canceled ? 'Cancelado' : 'Reservado'}
        </p>
        <button className="">
          <DropDownHistory
            idRoom={reservation.id_room}
            idRentReserve={reservation.id_rent_reserve}
          />
        </button>
      </div>
    </div>
  )
}
