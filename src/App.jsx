import React from "react"
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import Navbar4 from './components/Navbar4'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import data from './components/data'
import Card from './components/Card'
import datateam from './components/datateam'
import Cardteam from './components/Cardteam'



export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}

      />
    )
  })

  const teamcards = datateam.map(item => {
    return (
      <Cardteam
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <div className="inline-page ">
          <Navbar />
          <div className="marquee">
            <p>Delicious <img src="/images/vector.png" alt="logo" /> Labs</p>
          </div>
          <Footer />
        </div>
        <div className="inline-page ">
          <Navbar2 />
          <div className="card-list overflow-auto">
            {cards}
          </div>
          <Footer2 />
        </div>

        <div className="inline-page ">
          <Navbar3 />
          <div className="grid-wrapper">
            {teamcards}
          </div>
          <Footer2 />
        </div>

        <div className="inline-page ">
          <Navbar4 />
          <div className="aboutus">
            <p>We are a small collective based internationally but focusing on building small scale NFT projects. We love to think outside the blockchain and create experiences that holders want to be apart of.</p>
            <br></br>
            <p>Exciting things coming soon...</p>
          </div>
          <Footer2 />
        </div>
      </div >
    </div >
  )
}
