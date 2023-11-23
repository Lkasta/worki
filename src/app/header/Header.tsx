'use client'
import { Nut } from '@phosphor-icons/react'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { NavItem } from './NavItem'

export interface HeaderProps {
  tabSelected: string
}

export function Header() {
  const [currentTab, setCurrentTab] = useState('')

  return (
    <header className="flex justify-center py-8 shadow">
      <div className="flex w-app-lg min-w-app-lg gap-6">
        {/*  Content  */}
        <h1 className="text-[32px] font-bold">
          work<span className="text-violet-700">i</span>
        </h1>
        <Tabs.Root
          value={currentTab}
          onValueChange={setCurrentTab}
          className="flex items-center justify-center"
        >
          <Tabs.List className="flex items-center justify-center gap-6 text-xl">
            <NavItem
              value="home"
              title="Home"
              isSelected={currentTab === 'home'}
              destiny="home"
            />
            <NavItem
              value="RentHistory"
              title="Histórico de Reservas"
              isSelected={currentTab === 'RentHistory'}
              destiny="RentHistory"
            />
            <NavItem
              value="contato"
              title="Contato"
              isSelected={currentTab === 'contato'}
              destiny="home"
            />
            <NavItem
              value="cadDesk"
              title="Cadastro "
              isSelected={currentTab === 'cadDesk'}
              destiny="cadDesk"
            />
          </Tabs.List>
        </Tabs.Root>

        <button className="ml-auto flex items-center justify-center gap-3 rounded-full bg-violet-600 px-4 py-2 font-bold text-white shadow hover:bg-violet-500">
          <Nut size={20} weight="bold" />
          <p>Opções</p>
        </button>
      </div>
    </header>
  )
}
