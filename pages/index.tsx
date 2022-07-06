import React from "react"
import Head from 'next/head'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Nav from '../components/nav'
import HeroCta from '../components/heroCta'
import Services from '../components/services'
import AllWorld from '../components/allWorld'
import Country from '../components/country'
import Steps from '../components/steps'
import Insurance from '../components/insurance'
import Brands from '../components/brands'


export default function Home() {
  const patternText = 'abc'
  return (
    <div>
      <Head>
        <title>Tidal Groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-[url('/shipyard.jpeg')] ">
        <Nav />
        <HeroCta />

      </div>
      <div className="flex flex-wrap items-center justify-center bg-white">
        <Services />
        <Country />
      </div>
      <AllWorld />
      <Steps />
      <Insurance />
      <Brands/>
       
    <Contact />
      <Footer />
    </div>
  )
}
