import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export interface NavItemProps {
  title: string
  value: string
  isSelected?: boolean
  destiny: string
}

export function NavItem({
  value,
  title,
  isSelected = false,
  destiny,
}: NavItemProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/${destiny}`)
  }

  return (
    <div onClick={handleClick}>
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
    </div>
  )
}
