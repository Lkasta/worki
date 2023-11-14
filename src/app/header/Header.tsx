'use client'
import { Nut } from '@phosphor-icons/react'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { NavItem } from './NavItem'

export interface HeaderProps {
  tabSelected: string
}

export function Header() {
  const [currentTab, setCurrentTab] = useState('tab1')

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
              value="tab1"
              title="Home"
              isSelected={currentTab === 'tab1'}
              destiny="/Home"
            />
            <NavItem
              value="tab2"
              title="Histórico de Reservas"
              isSelected={currentTab === 'tab2'}
              destiny="/RentHistory"
            />
            <NavItem
              value="tab3"
              title="Contato"
              isSelected={currentTab === 'tab3'}
              destiny="/Home"
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
