import { Check } from '@phosphor-icons/react'
import { ElementType, useState } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function CheckboxCadDesk({ title, icon: Icon }: NavItemProps) {
  const [isChecked, setChecked] = useState(false)

  const handleCheckboxClick = () => {
    setChecked(!isChecked) // Inverte o estado ao ser clicado
  }

  return (
    <div className="flex items-center gap-1 text-zinc-700">
      <button
        className={
          isChecked
            ? 'flex h-app-checkbox w-app-checkbox cursor-pointer items-center rounded border-2 border-violet-700 bg-violet-200'
            : 'flex h-app-checkbox w-app-checkbox cursor-pointer items-center rounded border-2 border-violet-700 hover:bg-violet-200'
        }
        onClick={handleCheckboxClick}
      >
        {isChecked ? (
          <div className="flex items-center">
            <Check size={12} className="text-violet-700" weight="bold" />
          </div>
        ) : (
          <div></div>
        )}
      </button>
      <Icon size={16} weight="bold" />
      <p className="text-lg">{title}</p>
    </div>
  )
}
