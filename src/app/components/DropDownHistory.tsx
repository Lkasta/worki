import { DotsThreeVertical } from '@phosphor-icons/react'
import { useState } from 'react'

export function DropDownHistory() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
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
          className="absolute mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{ position: 'fixed' }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Item 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Item 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Item 3
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
