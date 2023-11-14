'use client'
import { DotsThreeVertical } from '@phosphor-icons/react'

/* eslint-disable @next/next/no-img-element */
export function ElementListRent() {
  return (
    <div className="my-4 flex h-20 justify-between overflow-auto rounded-lg border border-zinc-200 pr-5">
      <div className="flex min-w-0 items-center gap-x-4">
        <div className="h-full w-3 bg-purple-700" />
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
      </div>
    </div>
  )
}
