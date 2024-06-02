import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./Components/navbar/Navbar";

import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvoider from '@/provider/ThemeProvoider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvoider>
      <div className='container'>
      <div className='wrapper'>
        <Navbar />
      {children}

</div>
      </div>
      </ThemeProvoider>
      </ThemeContextProvider>
      </body>
    </html>
  )
}
