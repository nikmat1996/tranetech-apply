import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainModal from './components/MainModal'
import SubModal from './components/SubModal'
import BlackMonitor from './components/BlackMonitor'
import CarousalMain from './components/CarousalMain'
import InfinteCarousal from './components/InfinteCarousal'
import Skills from './components/Skills'
import Quotes from './components/Quotes'

function App() {

  return (
    <>
      <Navbar />
      <MainModal />
      <SubModal />
      <BlackMonitor />
      <CarousalMain />
      <InfinteCarousal />
      <Skills />
      <Quotes />
    </>
  )
}

export default App
