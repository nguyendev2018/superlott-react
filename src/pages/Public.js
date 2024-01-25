import React from 'react'
import {Header, Banner, SuperLott, Fair, Roadmap } from '../components'
import Why from '../components/Why'
import Revenue from '../components/Revenue'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Our from '../components/Our'

const Public = () => {
  return (
    <>
      <Header/>
      <div className="bg-section">
        <Banner/>
        <SuperLott/>
      </div>
      <Fair/> 
      {/* <Why/> */}
      <Revenue/>
      <Our/>
      <Contact/>
      <Roadmap/>
      <Footer/>
    </>
  )
}

export default Public