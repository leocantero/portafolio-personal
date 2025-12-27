import React from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
