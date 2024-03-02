import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Catigories from '../components/Catigories'
import Navbar2 from '../components/Navbar2'

export default function Root() {
  return (
    <>
    <Navbar2/>
    <Catigories/>
    <Outlet/>
    </>
  )
}
