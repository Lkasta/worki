import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface NavItemProps {
  title: string
  value: string
  isSelected?: boolean
}

export function NavItem({ value, title, isSelected = false }: NavItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative flex items-center justify-center"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
