import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRoutes from '../../Components/AppRoute'
import About from '../About/About'
import Profile from '../Profile/Profile'

const Main = () => {
    return (
        <>
            <Routes>
                <Route path='dashboard/profile'  element={<AppRoutes isPrivate={true}><Profile/></AppRoutes>}/>
                <Route path='dashboard/about'  element={<AppRoutes isPrivate={true}><About/></AppRoutes>}/>
            </Routes>
        </>
    )
}

export default Main
