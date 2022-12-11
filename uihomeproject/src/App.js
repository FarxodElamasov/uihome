import React from 'react'
import Section3F from './components/Section3F/Section3F'
import Section4F from './components/Section4F/Section4F'
import "./App.css"
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Recommended from './components/Recommended/Recommended'

export default function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Recommended/>
      <Section3F />
      <Section4F />
    </>
  )
}
