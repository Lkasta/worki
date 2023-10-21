'use client'
import { useState } from 'react'

export function Calendario() {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth(),
  )
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  )
  const [selectedStartDate, setSelectedStartDate] = useState<number | null>(
    null,
  )
  const [selectedEndDate, setSelectedEndDate] = useState<number | null>(null)

  const daysOfWeek: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate()
  }

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay()
    const totalDaysInMonth = getDaysInMonth(selectedYear, selectedMonth)

    const calendar: {
      day: number | null
      isStart: boolean
      isEnd: boolean
      inRange: boolean
      isInMonth: boolean
    }[] = []

    // Adiciona os dias do mês
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const isStart = day === selectedStartDate
      const isEnd = day === selectedEndDate
      const inRange =
        (selectedStartDate !== null &&
          selectedEndDate !== null &&
          day > selectedStartDate &&
          day < selectedEndDate) ||
        false

      calendar.push({
        day,
        isStart,
        isEnd,
        inRange,
        isInMonth: true, // Indica que o dia faz parte do mês atual
      })
    }

    return calendar
  }

  const handleDayClick = (day: number | null) => {
    if (day === null) return

    if (selectedStartDate === null) {
      setSelectedStartDate(day)
      setSelectedEndDate(null)
    } else if (selectedEndDate === null) {
      if (day >= selectedStartDate) {
        setSelectedEndDate(day)
      } else {
        setSelectedEndDate(selectedStartDate)
        setSelectedStartDate(day)
      }
    } else {
      // Se já tiver ambas as datas selecionadas, reinicia a seleção
      setSelectedStartDate(day)
      setSelectedEndDate(null)
    }
  }

  const handleButtonClick = () => {
    if (selectedStartDate !== null && selectedEndDate !== null) {
      const startDate = new Date(selectedYear, selectedMonth, selectedStartDate)
      const endDate = new Date(selectedYear, selectedMonth, selectedEndDate)

      console.log('Data inicial:', startDate.toDateString())
      console.log('Data final:', endDate.toDateString())
    } else {
      console.log('Selecione ambas as datas antes de clicar no botão.')
    }
  }

  return (
    <div className="mx-auto w-[335px] max-w-md rounded-lg border bg-white p-4 shadow-md">
      <div className="mb-4 flex justify-between">
        {/* Opções de Mês e Ano */}
        <div className="gap flex">
          <select
            className="rounded p-2 font-bold outline-none"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {new Date(2000, i, 1).toLocaleString('default', {
                  month: 'long',
                })}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="number"
            className="rounded p-2 font-bold outline-none"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          />
        </div>
      </div>

      {/* Calendário */}
      <div className="mb-4 grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}
        {generateCalendar().map((calendarDay, index) => (
          <div
            key={index}
            className={`p-2 ${
              calendarDay.day === null ? 'text-gray-300' : ''
            } ${
              calendarDay.isInMonth
                ? calendarDay.inRange
                  ? 'bg-violet-200'
                  : calendarDay.isStart
                  ? 'rounded bg-violet-700 text-white'
                  : calendarDay.isEnd
                  ? 'rounded bg-violet-700 text-white'
                  : ''
                : 'opacity-0' // Oculta os dias que não fazem parte do mês atual
            }`}
            onClick={() => handleDayClick(calendarDay.day)}
          >
            {calendarDay.day}
          </div>
        ))}
      </div>

      {/* Botão */}
      <button
        className="w-full rounded bg-violet-700 px-4 py-2 text-white"
        onClick={handleButtonClick}
      >
        Reservar
      </button>
    </div>
  )
}
