import { DotsThreeVertical } from '@phosphor-icons/react'

interface ElementListRentProps {
  deskName: string
  cancelado: boolean
  initialDate: string
  finalDate: string
}

export function ElementListRentAdmin({
  deskName,
  cancelado,
  initialDate,
  finalDate,
}: ElementListRentProps) {
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
    <div className="my-4 flex h-20 justify-between overflow-auto rounded-lg border border-zinc-200 bg-white pr-5">
      <div className="flex items-center gap-x-4">
        <div className="h-full w-3 bg-purple-700" />
        <div className="flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {deskName}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            CoworkingInPato
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="mt-1 text-xs leading-5 text-gray-500">
          {formatarData(initialDate)} - {formatarData(finalDate)}
        </p>
        <span className="relative flex h-2.5 w-2.5">
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-700" />
        </span>
        <p className="text-sm leading-6 ">
          {cancelado ? 'Cancelado' : 'Reservado'}
        </p>
        <button className="cursor-pointer rounded-full p-1 hover:bg-zinc-200">
          <DotsThreeVertical size={20} />
        </button>
      </div>
    </div>
  )
}
