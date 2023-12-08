import { AuthProvider } from '@/contexts/AuthContext'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], preload: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="pt-br" className="font">
        <body className={`${inter.className}grid min-h-screen text-zinc-700`}>
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
