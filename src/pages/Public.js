import React from 'react'
import {Header, Banner, SuperLott, Fair } from '../components'
import Why from '../components/Why'
import Revenue from '../components/Revenue'
import Contact from '../components/Contact'

const Public = () => {
  return (
    <>
      <Header/>
      <div className="bg-section">
        <Banner/>
        <SuperLott/>
      </div>
      <Fair/> 
      <Why/>
      <Revenue/>
      <Contact/>
    </>
  )
}

export default Public