import React from 'react'
import NavBar from '../../component/hotelOwner/NavBar'
import SideBar from '../../component/hotelOwner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col  min-h-screen'>
            <NavBar />
            <div className='flex flex-grow'>
                <SideBar />
                <div className='flex-1 p-4 pt-10 md:px-10 overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
