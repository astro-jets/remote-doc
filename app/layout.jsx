import './globals.css'
export const metadata = {
  title: 'Remote Doctor',
  description: 'Remote Patient Monitoring Application',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className='bg-gray-900'>{children}</body>
    </html>
  )
}
