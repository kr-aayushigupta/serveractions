import './globals.css'
import Navbar from "./components/Navbar"

export const metadata = {
  title: 'Next Todos',
  description: 'Created for Server Actions practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-yellow-600 dark:bg-green-600">
        <Navbar />
        <main className="mx-auto max-w-xl p-4 bg-white min-h-screen text-black">
          {children}
        </main>
      </body>
    </html>
  )
}
