'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'; // Importe os estilos padrão da biblioteca

import 'react-datepicker/dist/react-datepicker-cssmodules.css'; // Importe os estilos CSS-modules para personalização

export function Calendario() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleButtonClick = () => {
    if (startDate && endDate) {
      console.log('Data inicial:', startDate.toDateString())
      console.log('Data final:', endDate.toDateString())
    } else {
      console.log('Selecione ambas as datas antes de clicar no botão.')
    }
  }

  return (
    <div className="mx-auto my-8 w-[335px] max-w-md rounded-lg border bg-white p-4 shadow-md">
      <div className="mb-4 flex justify-between">
        <div className="gap flex">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>

      <div className="mb-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          inline
        />
      </div>

      <button
        className="w-full rounded bg-violet-700 px-4 py-2 text-white"
        onClick={handleButtonClick}
      >
        Reservar
      </button>
    </div>
  )
}
