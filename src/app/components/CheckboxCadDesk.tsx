import { Check } from '@phosphor-icons/react'
import { useState } from 'react'

interface CadDeskProps {
  title: string
  onClick: (serviceID: number) => void
  checked: boolean
  serviceID: number
}

export function CheckboxCadDesk({
  title,
  onClick,
  checked: propChecked,
  serviceID,
}: CadDeskProps) {
  const [checked, setChecked] = useState(propChecked)

  const handleCheckboxClick = () => {
    setChecked(!checked)
    onClick(serviceID)
  }

  return (
    <div className="flex items-center gap-1 text-zinc-700">
      <button
        type="button"
        className={
          checked
            ? 'flex h-app-checkbox w-app-checkbox cursor-pointer items-center rounded border-2 border-violet-700 bg-violet-200'
            : 'flex h-app-checkbox w-app-checkbox cursor-pointer items-center rounded border-2 border-violet-700 hover:bg-violet-200'
        }
        onClick={handleCheckboxClick}
      >
        {checked ? (
          <div className="flex items-center">
            <Check size={12} className="text-violet-700" weight="bold" />
          </div>
        ) : (
          <div></div>
        )}
      </button>
      <p className="text-lg">{title}</p>
    </div>
  )
}
