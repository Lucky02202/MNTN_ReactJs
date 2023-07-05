import React from 'react'
import './App.css'
import { Navbar } from './components'
import { Header, Information, Footer } from './containers'


const App = () => {
  return (
    <>
      <div className='mntl__background'>
        <Navbar />
        <Header />
      </div>
      <Information />
      <Footer />
    </>
  )
}

export default App