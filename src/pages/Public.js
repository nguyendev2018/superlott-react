import React from 'react'
import {Header, Banner, SuperLott, Fair, Roadmap } from '../components'
import Why from '../components/Why'
import Revenue from '../components/Revenue'
import Contact from '../components/Contact'
import Footer from '../components/layout/Footer'
import Our from '../components/Our'
const Public = () => {
  return (
    <>
      <Header/>
        <Banner/>
        <SuperLott/>
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