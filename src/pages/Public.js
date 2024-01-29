import React from 'react'
import {Header, Banner, SuperLott, Fair, Roadmap, Mobile, SSL, How } from '../components'
import Why from '../components/Why'
import Revenue from '../components/Revenue'
import Contact from '../components/Contact'
import Footer from '../components/layout/Footer'
import Our from '../components/Our';
import bgSection from '../components/Banner/img/bg-section.png';
const Public = () => {
  return (
    <>
      <Header/>
       <div className="general-section">
        <Banner/>
        <SuperLott/>
        <Fair/> 
        </div>
       
      <Why/>
    <Mobile/>
    <div className="general-section2 content-padding">
    <SSL/>
      <Revenue/>
    </div>
   
       <Our/>
       <How/>
       <Roadmap/>
     <Contact/>
      <Footer/> 
    </>
  )
}

export default Public