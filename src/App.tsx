import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/layouts/Navbar'

export const App = () => {
  return (
    <div className='text-red-500'>
         <Navbar/>
        {/*  */}
        <main>
          <Outlet/>
        </main>
        {/*  */}
      </div>
  )
}
