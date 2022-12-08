import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Recommended from './components/Recommended/Recommended'

export default function App() {
  return (
    <>
      {/* <div>UI Home</div>
  <div>Boshladik 11.11.2022</div> */}
      <Navbar/>
      <Header/>
      <Recommended/>
    </>
  )
}
