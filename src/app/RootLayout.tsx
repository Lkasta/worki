import { AuthProvider } from '@/contexts/AuthContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en" className="font">
        <body className={`grid min-h-screen text-zinc-700`}>{children}</body>
      </html>
    </AuthProvider>
  )
}
