// import { Inter } from 'next/font/google'

import Login from "./components/Login";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative h-screen flex items-end justify-center overflow-x-hidden'>
      <div className='container'>
        <Login />
      </div>
    </div>
  )
}
