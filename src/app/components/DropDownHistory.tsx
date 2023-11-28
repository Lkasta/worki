import { DotsThreeVertical } from '@phosphor-icons/react'
import { useState } from 'react'

interface DropdownProps {
  idRentReserve: number
}

export function DropDownHistory({ idRentReserve }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const cancelReservation = async (reservationId: number) => {
    try {
      const response = await fetch('/api/cancelReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reservationId }),
      })

      if (response.ok) {
        // Atualize o estado ou forneça feedback ao usuário, se necessário
        console.log('Reserva cancelada com sucesso!')
      } else {
        console.error('Erro ao cancelar reserva')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="text-left">
      <div>
        <div
          className="cursor-pointer rounded-full p-1 hover:bg-violet-200"
          id="options-menu"
          onClick={toggleDropdown}
        >
          <DotsThreeVertical size={20} />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
          style={{ position: 'fixed' }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="flex flex-col py-1" role="none">
            <button
              className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => cancelReservation(idRentReserve)}
            >
              Cancelar reserva
            </button>
            <button
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Ir ao quarto
            </button>
            <button
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Avaliar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
