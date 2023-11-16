'use client'
import { DotsThreeVertical } from '@phosphor-icons/react'
import 'flowbite'

/* eslint-disable @next/next/no-img-element */
export function ElementListRent() {
  return (
    <div className="my-4 flex h-20 justify-between overflow-auto rounded-lg border border-zinc-200 pr-5">
      <div className="flex min-w-0 items-center gap-x-4">
        <div className="h-full w-2 bg-purple-700" />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            Heisenberg
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            CoworkingInPato
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Agendado em 23/09/2023
        </p>
        <span className="relative flex h-2.5 w-2.5">
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-700" />
        </span>
        <p className="text-sm leading-6 text-gray-900">Reservado</p>
        <button className="cursor-pointer rounded-full p-1 hover:bg-zinc-200">
          <DotsThreeVertical size={20} />
        </button>
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Dropdown hover{' '}
          <svg
            className="ms-3 h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdownHover"
          className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
