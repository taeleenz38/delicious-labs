import React from "react"
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import Navbar4 from './components/Navbar4'
import Footer from './components/Footer'
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
          <div className="center">
            <div className="marquee">
              <p>Delicious <img src="/images/vector.png" alt="logo" /> Labs</p>
            </div>
          </div>
          <Footer />
        </div>
        <div className="inline-page ">
          <Navbar2 />
          <div className="center">
            <div className="card-list">
              {cards}
            </div>
          </div>
        </div>

        <div className="inline-page ">
          <Navbar3 />
          <div className="center">
            <div className="grid-wrapper">
              {teamcards}
            </div>
          </div>
        </div>

        <div className="inline-page ">
          <Navbar4 />
          <div className="center">
            <div className="aboutus">
              <p>We are a small collective based internationally but focusing on building small scale NFT projects. We love to think outside the blockchain and create experiences that holders want to be apart of.</p>
              <br></br>
              <p>Exciting things coming soon...</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
