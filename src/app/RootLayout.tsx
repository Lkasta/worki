import { AuthProvider } from '@/contexts/AuthContext';
import { roboto } from './layout';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className="font">
        <body className={`${roboto.className} grid min-h-screen text-zinc-700`}>
          {children}
        </body>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </html>
    </AuthProvider>
  );
}
