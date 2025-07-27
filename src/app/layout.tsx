import './globals.css'
import './styles/shared.css'
import Header from '@/components/Header/Header'

export const metadata = {
  title: 'Hebamme Jelena',
  description: 'Ihre vertrauensvolle Hebamme in der Region',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
