import React from 'react'
import AboutNav from '../components/AboutNav/AboutNav'
import AboutContent from '../components/AboutContent/AboutContent'
import Cards from '../components/Cards/Cards'
import Brands from '../components/Brands/Brands'
import Footer from '../components/Footer/Footer'

export default function About() {
  return (
    <div>
      <AboutNav/>
      <AboutContent/>
      <Cards/>
      <Brands/>
      <Footer/>
      </div>
  )
}
