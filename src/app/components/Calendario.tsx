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

  const daysOfWeek: string[] = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

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

    // Determine quantos dias extras são necessários no mês anterior
    const daysBefore = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

    // Determine quantos dias extras são necessários no mês seguinte
    const daysAfter = 42 - (daysBefore + totalDaysInMonth)

    // Adiciona os dias anteriores ao primeiro dia do mês
    for (
      let day = totalDaysInMonth - daysBefore + 1;
      day <= totalDaysInMonth;
      day++
    ) {
      calendar.push({
        day,
        isStart: false,
        isEnd: false,
        inRange: false,
        isInMonth: false,
      })
    }

    // Adicione os dias do mês
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
        isInMonth: true,
      })
    }

    // Adiciona os dias posteriores ao último dia do mês
    for (let day = 1; day <= daysAfter; day++) {
      calendar.push({
        day,
        isStart: false,
        isEnd: false,
        inRange: false,
        isInMonth: false,
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

  // Gere os próximos 10 anos a partir do ano atual
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i)

  return (
    <div className="mx-auto my-8 w-[335px] max-w-md rounded-lg border bg-white p-4 shadow-md">
      <div className="mb-4 flex justify-between">
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
          <select
            className="rounded p-2 font-bold outline-none"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

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
                : 'opacity-50' // Opacidade reduzida para dias fora do mês
            }`}
            onClick={() => handleDayClick(calendarDay.day)}
          >
            {calendarDay.day}
          </div>
        ))}
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
