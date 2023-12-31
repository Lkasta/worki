'use client'
import { AuthContext } from '@/contexts/AuthContext'
import { SignOut } from '@phosphor-icons/react'
import * as Tabs from '@radix-ui/react-tabs'
import { useContext, useState } from 'react'
import { NavItem } from './NavItem'

export interface HeaderProps {
  tabSelected: string
}

export function Header() {
  const [currentTab, setCurrentTab] = useState('')
  const { signOut } = useContext(AuthContext)

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
              value="cadDesk"
              title="Cadastrar Sala"
              isSelected={currentTab === 'cadDesk'}
              destiny="cadDesk"
            />
            <NavItem
              value="managementRents"
              title="Suas Salas"
              isSelected={currentTab === 'managementRents'}
              destiny="managementRents"
            />
          </Tabs.List>
        </Tabs.Root>

        <button
          onClick={signOut}
          className="ml-auto flex items-center justify-center gap-3 rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow"
        >
          <SignOut size={20} weight="bold" />
          <p>Log Out</p>
        </button>
      </div>
    </header>
  )
}
