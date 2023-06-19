import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainModal from './components/MainModal'
import SubModal from './components/SubModal'
import BlackMonitor from './components/BlackMonitor'
import CarousalMain from './components/CarousalMain'

function App() {

  return (
    <>
      <Navbar />
      <MainModal />
      <SubModal />
      <BlackMonitor />
      <CarousalMain />
    </>
  )
}

export default App
